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
const SortContainer = styled.div``

const SortLabel = styled.span`
    margin: 8px;
    font-size: 18px;
`
const SortControl = styled.select`
    witdth: 100px;
    height: 32px;
    padding: 8px;
    border: #491C8A solid 1px;
    box-shadow: 0 0px 2px #491C8A;
    font-size: 16px;
    cursor: pointer;
`

const SortOption = styled.option``

const Header = () => (
    <HeaderContainer>
        <Title>Found 50 restaurants</Title>
        <SortContainer>
            <SortLabel>Sort by:</SortLabel>
            <SortControl>
                <SortOption>Name A-Z</SortOption>
                <SortOption>Name Z-A</SortOption>
            </SortControl>
        </SortContainer>
    </HeaderContainer>
)

export default Header
