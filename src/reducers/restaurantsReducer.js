const restaurantsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SORT_RESTAURANTS':
        case 'SEARCH_RESTAURANTS':
            const query = action.payload.query !== undefined ? action.payload.query.toLowerCase() : state.query
            const sortBy = action.payload.sortBy || state.sortBy

            const comparisonFunction = COMPARISON_FUNCTIONS[sortBy]
            const restaurants = state.allRestaurants
                .filter(restaurant => restaurant.name.toLowerCase().includes(query))
                .sort(comparisonFunction)

            return { ...state, restaurants, query, sortBy }
        default:
            return state
    }
}
const COMPARISON_FUNCTIONS = {
    None: () => 0,
    NameAsc: (a, b) => a.name.localeCompare(b.name),
    NameDesc: (a, b) => b.name.localeCompare(a.name)
}

export default restaurantsReducer
