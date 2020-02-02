import React from 'react'
import styled from 'styled-components'

const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 68px;
    margin-bottom: 8px;
    border-bottom: 2px solid #491C8A;
`
const Logo = styled.img`
    height: 48px;
    cursor: pointer;
`

const Navbar = () => (
    <NavbarContainer>
      <Logo src="logo.svg" />
    </NavbarContainer>
)

export default Navbar
