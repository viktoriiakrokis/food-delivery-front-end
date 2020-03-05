import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
    display: flex;
    justify-content: center;
    width: 130px;
    height: 20px;
    margin-top: 12px;
    padding: 4px 0px;
    border: 1px solid #491C8A;
    border-radius: 6px;
    cursor: pointer;
    color: ${props => props.isSelected ? "white" : "#491C8A"};
    background-color: ${props => props.isSelected ? "#491C8A" : "white"};
`
const TagName = styled.span`
    font-size: 16px;
    font-family: Nunito;
    font-weight: 600;
`

const Tag = ({ tag, isSelected, dispatchFilter }) => (
    <Container 
        isSelected={ isSelected }
        onClick={ () => dispatchFilter(tag)}>
        <TagName>{ tag }</TagName>
    </Container>
)

export default Tag
