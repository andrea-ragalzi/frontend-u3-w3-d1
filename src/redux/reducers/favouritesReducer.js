import { ADD_TO_FAVOURITES, DELETE_FROM_FAVOURITES } from
    "../actions/favouritesAction";

const addToFavourite = (values, valueToAdd) => {
    if (values.includes(valueToAdd)) {
        return [...values];
    }
    return [...values, valueToAdd];
}

const deleteFromFavourite = (values, valueToDelete) => {
    return values.filter(value => value !== valueToDelete);
}

const initialState = {
    favourites: {
        companies: []
    }
};

export const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: {
                    companies: addToFavourite(
                        state.favourites.companies, action.payload)
                },
            }
        case DELETE_FROM_FAVOURITES:
            return {
                ...state,
                favourites: {
                    companies: deleteFromFavourite(
                        state.favourites.companies, action.payload)
                },
            }
        default:
            return state;
    }
};