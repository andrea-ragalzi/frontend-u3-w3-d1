export const SEARCH = 'SEARCH';

export const searchAction = (results) => {
    return {
        type: SEARCH,
        payload: results
    }
} 