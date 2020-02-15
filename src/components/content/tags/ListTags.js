import React from 'react'
import styled from 'styled-components'
import Tag from './Tag'

const ListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    ::after {
        content: "";
        width: 27.5%;
    }
`

const ListTags = ({ tags, dispatchFilter }) => (
    <ListContainer>
        {
            tags.map(tag =>
                <Tag dispatchFilter={ dispatchFilter } key={ tag } tag={ tag } />)
        }
    </ListContainer>
)

export default ListTags