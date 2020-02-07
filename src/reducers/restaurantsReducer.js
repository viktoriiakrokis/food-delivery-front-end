const restaurantsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SORT_RESTAURANTS':
            let restaurantsCopy = state.restaurants.slice()
            const comparisonFunction = COMPARISON_FUNCTIONS[action.payload.sortBy]
            restaurantsCopy.sort(comparisonFunction)
            return { ...state, restaurants: restaurantsCopy }

        case 'SEARCH_RESTAURANTS':
            const query = action.payload.query.toLowerCase()
            const restaurants = state.allRestaurants.filter(restaurant =>
                restaurant.name.toLowerCase().includes(query))
            return { ...state, restaurants }

        default:
            return state
    }
}
const COMPARISON_FUNCTIONS = {
    NameAsc: (a, b) => a.name.localeCompare(b.name),
    NameDesc: (a, b) => b.name.localeCompare(a.name)
}

export default restaurantsReducer
