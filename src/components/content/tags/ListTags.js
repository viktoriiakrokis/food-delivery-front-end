import React from 'react'
import styled from 'styled-components'
import Tag from './Tag'

const ShowTags = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const Button = styled.button`
    text-align: center;
    height: 32px;
    width: 180px;
    margin-top: 18px;
    background-color: #491C8A;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #FFFFFF;
    border: 1px solid #491C8A;
    cursor: pointer;

    :hover {
        color: #491C8A;
        border: 1px solid  #491C8A;
        background-color: #FFFFFF;
    }
`

const ListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 340px) {
        justify-content: center;
    }
`


class ListTags extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            itemsToShow: 8,
            expanded: false  
        }
        this.showMore = this.showMore.bind(this);
    }

    showMore() {
        this.state.itemsToShow === 8 ? (
          this.setState({ itemsToShow: 48, expanded: true })
        ) : (
          this.setState({ itemsToShow: 8, expanded: false })
        )
    }

    render(){
        const { tags, dispatchFilter, selectedArrTags } = this.props
        return<ListContainer>
            <ShowTags>
                <Button value = "ShowMore" onClick={this.showMore}>
                    { this.state.expanded && <span>Show less tags...</span> } 
                    { !this.state.expanded && <span>Show more tags...</span> } 
                </Button>
            </ShowTags>
            {tags.slice(0, this.state.itemsToShow).map(tag => 
                <Tag dispatchFilter={ dispatchFilter } key={ tag } tag={ tag } isSelected={ selectedArrTags.includes(tag) }/>)
            }
        </ListContainer>
    }
}

export default ListTags
