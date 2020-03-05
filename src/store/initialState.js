import data from '../data/restaurants.json'

// create array of tags
const allTags = data.restaurants.flatMap(restaurant => restaurant.tags)
const arrTags = Array.from(new Set(allTags))

// add new property to restaurant(name, description) and concat them
const restaurant = data.restaurants
for(let i = 0; i< restaurant.length; i++) {
    restaurant[i].searchText = restaurant[i].name.concat(restaurant[i].description)
}

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
