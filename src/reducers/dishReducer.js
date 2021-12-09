import { FETCH_DISH, ADD_NEW_DISH, ADD_TO_FAVS, REMOVE_FROM_FAVS, FETCH_SUCCESS, FETCH_ERROR } from "../actions/types"

const initialState = {
    loading: false,
    error: null,
    dish: {},
    favs: []
}
const dishReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DISH:
            return {
                ...state,
                loading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                dish: action.payload
            }
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ADD_TO_FAVS:
            return {
                ...state,
                loading: false,
                favs: [...state.favs, action.payload]
            }
        case REMOVE_FROM_FAVS:
            return {
                ...state,
                loading: false,
                favs: state.favs.filter((fav) => fav.idMeal !== action.payload)
            }
        case ADD_NEW_DISH:
            localStorage.setItem('newDish', JSON.stringify(action.payload))
            return {
                ...state,
                loading: false
            }  
        default:
            return state
    }
}
export default dishReducer