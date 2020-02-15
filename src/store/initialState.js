import data from '../data/restaurants.json'

let ArrTags = []
for (let i = 0; i<data.restaurants.length; i++) {
    for (let i2 = 0; i2<data.restaurants[i].tags.length; i2++) {
        let current = data.restaurants[i].tags[i2]
        if (!ArrTags.includes(current)) {
            ArrTags.push(current)
        }
    }
}

const initialState = {
    restaurants: {
        allRestaurants: data.restaurants,
        restaurants: data.restaurants,
        sortBy: 'None',
        query: '',
        tags: ArrTags,
        selectedArrTags: []
    }
}


console.log(ArrTags)
export default initialState
