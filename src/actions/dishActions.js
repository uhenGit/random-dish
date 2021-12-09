import { FETCH_DISH, ADD_NEW_DISH, ADD_TO_FAVS, REMOVE_FROM_FAVS, FETCH_SUCCESS, FETCH_ERROR } from "./types"

export const fetchRandDish = () => (dispatch) => {
    dispatch({type: FETCH_DISH})
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((res) =>  res.json())
        .then((data) => {
            dispatch({
                type: FETCH_SUCCESS,
                payload: data
            })
        })
        .catch((err) => {
            dispatch({
                type: FETCH_ERROR,
                payload: `Get meal error: ${err}. Stay hungry`
            })
        })
}
export const addNewDish = (data) => (dispatch) => {
    dispatch({type: FETCH_DISH})
    try {
        dispatch({
            type: ADD_NEW_DISH,
            payload: data
        })
    } catch (e) {
        dispatch({
            type: FETCH_ERROR,
            payload: `Create custom dish error: ${e}`
        })
    }
    
}
export const addToFavs = (data) => (dispatch) => {
    dispatch({type: FETCH_DISH})
    try {
        dispatch({
            type: ADD_TO_FAVS,
            payload: data
        })
    } catch (e) {
        dispatch({
            type: FETCH_ERROR,
            payload: `Adding to favourites crached by ${e}`
        })
    }
}
export const remFromFavs = (_id) => (dispatch) => {
    dispatch({type: FETCH_DISH})
    try {
        dispatch({
            type: REMOVE_FROM_FAVS,
            payload: _id
        })
    } catch (e) {
        dispatch({
            type: FETCH_ERROR,
            payload: `Item remove failed by ${e}`
        })
    }
}