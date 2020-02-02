import React from 'react'
import styled from 'styled-components'

const NavbarContainer = styled.div`
    height: 68px;
    border-bottom: 2px solid #491C8A;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Logo = styled.img`
    height: 48px;
`;

const Navbar = () => (
  <NavbarContainer>
    <Logo src="logo.svg" />
  </NavbarContainer>
);

export default Navbar