import React from 'react'
import styled from 'styled-components'

const ElementContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 18px;
    border: 1px solid #491C8A;
    border-radius: 6px;
    font-family: Nunito;

    @media (min-width: 520px) {
        width: 48%;
    }

    @media (min-width: 800px) {
        width: 31%;
    }
`

const Thumbnail = styled.img`
    width: 100%;
    object-fit: cover;
    height: 200px;
    border-radius: 5px 5px 0px 0px;
`

const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
`

const RestaurantName = styled.span`
    color: #491C8A;
    font-size: 18px;
    font-weight: 600;
`

const Description = styled.span`
    color: #888888;
    font-size: 16px;
`

const AddInfo = styled.span`
    margin-top: 8px;
    font-size: 12px;
    color: #888888;
`

const ListItem = ({ restaurant }) => (
    <ElementContainer>
        <Thumbnail src={restaurant.image}/>
        <InfoBox>
            <RestaurantName>{ restaurant.name }</RestaurantName>
            <Description>{ restaurant.description }</Description>
            <AddInfo>{ restaurant.city } • Delivery price: 
                     { (restaurant.delivery_price / 100).toFixed(2) } 
                     { restaurant.currency}
            </AddInfo>
        </InfoBox>
    </ElementContainer>
)

export default ListItem
