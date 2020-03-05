import data from '../data/restaurants.json'

// create array of tags
const allTags = data.restaurants.flatMap(restaurant => restaurant.tags)
const arrTags = Array.from(new Set(allTags))

// add new property to restaurant(name, description) and concat them
data.restaurants = data.restaurants.map((restaurant) => ({
    ...restaurant,
    searchText: restaurant.name.concat(restaurant.description)
}))

console.log(data.restaurants)

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
