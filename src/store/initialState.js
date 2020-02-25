import data from '../data/restaurants.json'

const allTags = data.restaurants.flatMap(restaurant => restaurant.tags)
const arrTags = Array.from(new Set(allTags))

const initialState = {
    restaurants: {
        allRestaurants: data.restaurants,
        restaurants: data.restaurants,
        sortBy: 'None',
        query: '',
        tags: arrTags,
        selectedArrTags: []
    }
}

export default initialState
