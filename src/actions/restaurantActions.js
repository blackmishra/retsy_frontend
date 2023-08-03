import axios from 'axios'


export const listRestaurants = (keyword = '') => async (dispatch) => {
    try {
        dispatch({ type: 'RESTAURANT_LIST_REQUEST' })

        const { data } = await axios.get(`/api/restaurants${keyword}`)

        dispatch({
            type: 'RESTAURANT_LIST_SUCCESS',
            payload: data
        })

    } catch (error) {
        dispatch({
            type: 'RESTAURANT_LIST_FAIL',
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listRestaurantDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'RESTAURANT_DETAILS_REQUEST' })

        const { data } = await axios.get(`/api/restaurant/${id}`)

        dispatch({
            type: 'RESTAURANT_LIST_SUCCESS',
            payload: data
        })

    } catch (error) {
        dispatch({
            type: 'RESTAURANT_DETAILS_FAIL',
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}