import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Header from './header/Header'
import List from './list/List'
import { createSortRestaurantsAction } from '../../actions/restaurantActions'

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 1170px;
    margin: auto;
    padding: 24px;
`

const Content = ({ restaurants, dispatchSort }) => (
    <ContentContainer>
        <Header restaurants={ restaurants } dispatchSort={ dispatchSort } />
        <List restaurants={ restaurants }/>
    </ContentContainer>
)

const mapStateToProps = state => ({
    restaurants: state.restaurants.restaurants
})

const mapDispatchToProps = dispatch => ({
    dispatchSort: (sortBy) => dispatch(createSortRestaurantsAction(sortBy))
});

export default connect(mapStateToProps, mapDispatchToProps)(Content)
