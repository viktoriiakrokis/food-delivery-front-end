const restaurantsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SORT_RESTAURANTS':
            let restaurantsCopy = state.restaurants.slice()
            const sortFunctions = SORT_FUNCTIONS[action.payload.sortBy]
            restaurantsCopy.sort(sortFunctions)
            return { ...state, restaurants: restaurantsCopy }
        default:
            return state
    }
}

const SORT_FUNCTIONS = {
    NameAsc: (a, b) => a.name.localeCompare(b.name),
    NameDesc: (a, b) => b.name.localeCompare(a.name)
}

export default restaurantsReducer
