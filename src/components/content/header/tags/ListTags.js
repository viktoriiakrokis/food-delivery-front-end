import React from 'react'
import styled from 'styled-components'
import Tag from './Tag'

const ListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    @media (max-width: 340px) {
        justify-content: center;
    }
`

const ListTags = ({ tags, dispatchFilter, selectedArrTags }) => (
    <ListContainer>
        {tags.map(tag => 
            <Tag dispatchFilter={ dispatchFilter } key={ tag } tag={ tag } isSelected={ selectedArrTags.includes(tag) }/>)
        }
    </ListContainer>
)

export default ListTags
