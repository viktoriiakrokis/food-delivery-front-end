import React from 'react'
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



const List = ({ restaurants }) => (
    <RestaurantList>
        {
            restaurants.map(restaurant =>
                <ListItem key={ restaurant.name } restaurant={ restaurant } />)
        }
    </RestaurantList>
)

export default List
