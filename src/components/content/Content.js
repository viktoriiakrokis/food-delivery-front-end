import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Header from './header/Header'
import List from './list/List'
import ListTags from './tags/ListTags'
import { createSortAction, createSearchAction, filterByTags } from '../../actions/restaurantActions'

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 1170px;
    margin: auto;
    padding: 0px 24px 24px 24px;
`

const Content = ({ tags, restaurants, dispatchSort, dispatchSearch, dispatchFilter, selectedArrTags }) => (
    <ContentContainer>
        <Header
            restaurants={ restaurants }
            dispatchSort={ dispatchSort }
            dispatchSearch={ dispatchSearch } />
        <ListTags tags={ tags }
            dispatchFilter={ dispatchFilter }
            selectedArrTags={ selectedArrTags } />
        <List restaurants={ restaurants }/>
    </ContentContainer>
)

const mapStateToProps = state => ({
    restaurants: state.restaurants.restaurants,
    tags: state.restaurants.tags,
    selectedArrTags: state.restaurants.selectedArrTags
})

const mapDispatchToProps = dispatch => ({
    dispatchSort: (sortBy) => dispatch(createSortAction(sortBy) ),
    dispatchSearch: (query) => dispatch(createSearchAction(query)),
    dispatchFilter: (tag) => dispatch(filterByTags(tag))
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)
