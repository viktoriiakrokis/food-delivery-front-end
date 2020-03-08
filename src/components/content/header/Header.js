import React from 'react'
import styled from 'styled-components'
import ListTags from './tags/ListTags'

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    padding: 16px 0px;
    border-bottom: #491C8A solid 1px;
    font-family: Nunito;

    @media (max-width: 520px) {
        display: flex;
        align-content: center;
    }
`

const Title = styled.span`
    width: 100%;
    margin-left: 4px;
    font-size: 24px;
    font-weight: 600;
    text-align: center;

    @media (max-width: 600px) {
        text-align: center;
    }

    @media (min-width: 800px) {
        width: auto;
    }
`

const SearchBar = styled.div`
    display: flex;
    height: 36px;
    width: 225px;
    border: 1px solid #491c8a;
    padding: 0px 16px 0px 20px;
    border-radius: 21px;
    
    @media (max-width: 680px) {
    margin: 18px auto;
    }
`

const SearchRestaurant = styled.input`
    width: 344px;
    border: none;
    font-size: 16px;
    outline: none;
`

const SearchLogo = styled.img`
    height: 26px;
    margin: 5px 0px;
    cursor: pointer;
`

const NumberOfRestaurants = styled.span`
    font-weight: bold;
` 
const SortContainer = styled.div`
    display: flex;
    align-item: right;

    @media (max-width: 680px) {
        display: flex;
        flex-wrap: wrap;
        margin: auto;
        justify-content: center;
    }
`

const SortLabel = styled.span`
    margin: 8px;
    font-size: 18px;
`
const SortControl = styled.select`
    width: 120px;
    margin-left: 10px;
    height: 32px;
    border: #491C8A solid 1px;
    box-shadow: 0 0px 2px #491C8A;
    font-size: 16px;
    cursor: pointer;
`


const Button = styled.button`
    text-align: center;
    height: 32px;
    width: 140px;
    margin-left: 18px;
    background-color: #491C8A;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    color: #FFFFFF;
    border: 1px solid #491C8A;
    cursor: pointer;

    :hover {
        color: #491C8A;
        border: 1px solid  #491C8A;
        background-color: #FFFFFF;
    }
`

const SortOption = styled.option``

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            expanded: false  
        }
        this.toggleExpanded = this.toggleExpanded.bind(this);
    }

    toggleExpanded() {
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        const { restaurants, tags, selectedArrTags, dispatchSort, dispatchSearch, dispatchFilter } = this.props
        const { expanded } = this.state
        return <HeaderContainer>
            <Title>Found <NumberOfRestaurants >{ restaurants.length} </NumberOfRestaurants>restaurants</Title>
            <SearchBar>
                <SearchRestaurant
                    id='searchbar'
                    type="text"
                    name="search"
                    placeholder="Search..."
                    onChange={ (event) => dispatchSearch(event.target.value) } />
                <SearchLogo src="icon.png"/>
            </SearchBar>
            <SortContainer>
                <SortLabel>Sort by:</SortLabel>
                <SortControl id='sortbar' onChange={ (event) => dispatchSort(event.target.value) }>
                    <SortOption value='None'>None</SortOption>
                    <SortOption value='NameAsc'>Name A-Z</SortOption>
                    <SortOption value='NameDesc'>Name Z-A</SortOption>
                </SortControl>
                    <Button onClick={ this.toggleExpanded }>
                        <span>{ expanded ? 'Hide tags' : 'Show tags'}</span>
                    </Button>
            </SortContainer>
            
            { expanded && <ListTags
                tags={ tags }
                dispatchFilter={ dispatchFilter }
                selectedArrTags={ selectedArrTags } />
            }
        </HeaderContainer>
    }
}  


export default Header
