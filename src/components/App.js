import React from 'react'
import styled from 'styled-components'

import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import Content from './content/Content'

const AppContainer = styled.div``

const App = () => (
    <AppContainer>
        <Navbar />
        <Content />
        <Footer />
    </AppContainer>
);

export default App
