export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const DELETE_FROM_FAVOURITES = 'DELETE_FROM_FAVOURITES';

export const addToFavouritesAction = (book) => {
    return {
        type: ADD_TO_FAVOURITES,
        payload: book
    }
}

export const deleteFromFavouritesAction = (book) => {
    return {
        type: DELETE_FROM_FAVOURITES,
        payload: book
    }
}