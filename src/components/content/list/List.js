import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import ListItem from './ListItem'

const RestaurantList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    ::after {
        content: "";
        width: 31%;
    }
`

const List = (props) => (
    <RestaurantList>
        {
            props.restaurants.map(restaurant =>
                <ListItem key={ restaurant.name } restaurant={ restaurant } />)
        }
    </RestaurantList>
)

const mapStateToProps = state => ({
    restaurants: state.restaurants.restaurants
})

export default connect(mapStateToProps, null)(List)
