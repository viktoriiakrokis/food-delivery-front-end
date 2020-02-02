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
    font-size: 14px;
`

const ListItem = () => (
    <ElementContainer>
        <Thumbnail src="https://prod-wolt-venue-images-cdn.wolt.com/5d108aa82e757db3f4946ca9/d88ebd36611a5e56bfc6a60264fe3f81"/>
        <InfoBox>
            <RestaurantName>Momotoko Citycenter</RestaurantName>
            <Description>Japanilaista ramenia parhaimmillaan</Description>
        </InfoBox>
    </ElementContainer>
)

export default ListItem
