import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'

const RestaurantList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const List = () => (
    <RestaurantList>
        <ListItem />
    </RestaurantList>
)

export default List
