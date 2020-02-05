import React from 'react'
import { connect } from 'react-redux'
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

const Content = ({ restaurants }) => (
    <ContentContainer>
        <Header restaurants={ restaurants }/>
        <List restaurants={ restaurants }/>
    </ContentContainer>
)

const mapStateToProps = state => ({
    restaurants: state.restaurants.restaurants
})

export default connect(mapStateToProps, null)(Content)
