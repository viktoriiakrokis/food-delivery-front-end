import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 100%;
    color: #491C8A;
    background-color: #E8E9ED;
    font-size: 18px;
    font-family: Nunito
`

const Footer = () => (
    <FooterContainer>
        © Wolt 2014–2020
    </FooterContainer>
)


export default Footer
