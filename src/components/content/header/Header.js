import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 8px;
    border-bottom: #491C8A solid 1px;
    font-family: Nunito;

    @media (min-width: 480px) {
        justify-content: space-between;
    }
`

const Title = styled.span`
    margin-left: 4px;
    font-size: 24px;
    font-weight: 600;
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
    padding: 8px;
    border: #491C8A solid 1px;
    box-shadow: 0 0px 2px #491C8A;
    font-size: 16px;
    cursor: pointer;
`

const SortOption = styled.option``
const DefaultSortOption = styled.option`
    display: none
`

const Header = ({ restaurants, dispatchSort }) => (
    <HeaderContainer>
        <Title>Found <NumberOfRestaurants>{ restaurants.length} </NumberOfRestaurants>restaurants</Title>
        <SortContainer>
            <SortLabel>Sort by:</SortLabel>
            <SortControl onChange={ (event) => dispatchSort(event.target.value) }>
                <DefaultSortOption>Choose...</DefaultSortOption>
                <SortOption value='NameAsc'>Name A-Z</SortOption>
                <SortOption value='NameDesc'>Name Z-A</SortOption>
            </SortControl>
        </SortContainer>
    </HeaderContainer>
)

export default Header
