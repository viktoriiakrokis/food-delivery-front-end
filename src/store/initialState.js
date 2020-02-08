import data from '../data/restaurants.json'

const initialState = {
    restaurants: {
        allRestaurants: data.restaurants,
        restaurants: data.restaurants,
        sortBy: 'None',
        query: ''
    }
}

export default initialState
