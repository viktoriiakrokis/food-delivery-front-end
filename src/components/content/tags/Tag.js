import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 40px;
    margin-top: 18px;
    border: 1px solid #491C8A;
    border-radius: 6px;
    cursor: pointer;
    color: ${props => props.isSelected ? "white" : "#491C8A"};
    background-color: ${props => props.isSelected ? "#491C8A" : "white"};
`
const TagName = styled.span`
    text-align: center;
    vertical-align: middle;
    line-height: 40px; 
    font-family: Nunito;
    font-weight: 700;
`

const Tag = ({ tag, isSelected, dispatchFilter }) => (
    <Container 
        isSelected={ isSelected }
        onClick={ () => dispatchFilter(tag)}>
        <TagName>{ tag }</TagName>
    </Container>
)

export default Tag
