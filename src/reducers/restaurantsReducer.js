const restaurantsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SORT_RESTAURANTS':
        case 'SEARCH_RESTAURANTS':
            const query = action.payload.query !== undefined ? action.payload.query.toLowerCase() : state.query
            const sortBy = action.payload.sortBy || state.sortBy

            const comparisonFunction = COMPARISON_FUNCTIONS[sortBy]
            const restaurants = state.allRestaurants
                .filter(restaurant => restaurant.searchText.toLowerCase().includes(query))
                .sort(comparisonFunction)

            return { ...state, restaurants, query, sortBy }

        case 'FILTER_RESTAURANTS':
            const tag = action.payload.tag

            const selectedArrTags = state.selectedArrTags
            if (!selectedArrTags.includes(tag)) {
                selectedArrTags.push(tag)
            } else if(selectedArrTags.includes(tag)){
                selectedArrTags.splice( selectedArrTags.indexOf(tag), 1 )
            }

            let restaurantsFiltered = state.allRestaurants.filter(restaurant =>
                restaurant.tags.some(tag => selectedArrTags.includes(tag)))

            if(selectedArrTags.length === 0) {
                restaurantsFiltered = state.allRestaurants
            }

            return { ...state, restaurants: restaurantsFiltered, selectedArrTags }
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
