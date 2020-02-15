export const createSortAction = (sortBy) => ({
    type: 'SORT_RESTAURANTS',
    payload: { sortBy }
})

export const createSearchAction = (query) => ({
    type: 'SEARCH_RESTAURANTS',
    payload: { query }
})

export const filterByTags = (tag) => ({
    type: 'FILTER_RESTAURANTS',
    payload: { tag }
})
