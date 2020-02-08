import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 16px 0px;
    border-bottom: #491C8A solid 1px;
    font-family: Nunito;


    @media (min-width: 520px) {
        justify-content: space-between;
    }
`

const Title = styled.span`
    width: 100%;
    margin-left: 4px;
    font-size: 24px;
    font-weight: 600;
    text-align: center;

    @media (min-width: 520px) {
        text-align: left;
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
    
    @media (max-width: 520px) {
        margin: 12px 0px;
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
const SortContainer = styled.div``

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

const SortOption = styled.option``

const Header = ({ restaurants, dispatchSort, dispatchSearch }) => (
    <HeaderContainer>
        <Title>Found <NumberOfRestaurants>{ restaurants.length} </NumberOfRestaurants>restaurants</Title>
        <SearchBar>
            <SearchRestaurant
                type="text"
                name="search"
                placeholder="Search..."
                onChange={ (event) => dispatchSearch(event.target.value)} />
            <SearchLogo src="icon.png"/>
        </SearchBar>
        <SortContainer>
            <SortLabel>Sort by:</SortLabel>
            <SortControl onChange={ (event) => dispatchSort(event.target.value) }>
                <SortOption value='None'>None</SortOption>
                <SortOption value='NameAsc'>Name A-Z</SortOption>
                <SortOption value='NameDesc'>Name Z-A</SortOption>
            </SortControl>
        </SortContainer>
    </HeaderContainer>
)

export default Header
