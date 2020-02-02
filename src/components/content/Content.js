import React from 'react'
import styled from 'styled-components'
import Header from './header/Header'
import List from './list/List'

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 1170px;
    margin: auto;
    padding: 24px;
`

const Content = () => (
    <ContentContainer>
        <Header />
        <List />
    </ContentContainer>
)

export default Content