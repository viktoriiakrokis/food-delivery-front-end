export const createSortRestaurantsAction = (sortBy) => ({
    type: 'SORT_RESTAURANTS',
    payload: { sortBy } // possible values: nameAsc, nameDesc
})
