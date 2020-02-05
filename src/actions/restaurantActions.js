export const sortRestaurants = (field, direction) => ({
    type: 'SORT_RESTAURANTS',
    payload: { field, direction }
})
