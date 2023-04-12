export const SEARCH = 'SEARCH';

const baseEndpoint =
    'https://strive-benchmark.herokuapp.com/api/jobs?company='

const setResultsAction = (results) => {
    return {
        type: SEARCH,
        results
    }
}

export const setResultsWithThunk = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(baseEndpoint + query + '&limit=20')
            if (response.ok) {
                const { data } = await response.json()
                console.log(data);
                dispatch(setResultsAction(data))
            } else {
                alert('Error fetching results')
            }
        } catch (error) {
            console.log(error)
        }
    }
}