import {
    GET_STATE,
      ADD_USER,
      DELETE_USER,
        ADD_COUNT,
         SET_LOADING,
          SET_ERROR, } from './actionTypes'

const initState = {
    users: [],
    loading: false,
    error: '',
    count: 0
}

const userReducer = (state = initState, action)=> {
    switch(action.type) {
        case GET_STATE:
            return {
                ...state
            }
        case ADD_USER:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter( user => user.id !== action.payload)
            }
        case ADD_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            } 
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            } 
        default:
            return state
    }
}

export default userReducer