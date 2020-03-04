import React from 'react'
import styled from 'styled-components'
import Tag from './Tag'

const ShowMoreContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const Button = styled.button`
    text-align: center;
    height: 32px;
    width: 180px;
    margin-top: 18px;
    background-color: #491C8A;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #FFFFFF;
    border: 1px solid #491C8A;
    cursor: pointer;
`

const ListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 520px) {
        justify-content: center;
    }
`

const ListTags = ({ tags, dispatchFilter, selectedArrTags }) => (
    <ListContainer>
        <ShowMoreContainer>
            <Button value = "ShowMore">Show More Tags...</Button>
        </ShowMoreContainer>
        {
            tags.map(tag =>
                <Tag dispatchFilter={ dispatchFilter } key={ tag } tag={ tag } isSelected={ selectedArrTags.includes(tag) } />)
        }
    </ListContainer>
)

export default ListTags
