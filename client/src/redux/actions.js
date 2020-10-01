import Axios from 'axios'
import { GET_STATE, ADD_USER, DELETE_USER, ADD_COUNT, SET_LOADING, SET_ERROR } from './actionTypes'


    /*return {
        type: GET_ITEMS
    }*/
export const getUsers = ()=> {
    return (dispatch)=> {
        dispatch(setLoading())
        Axios.get('http://localhost:5000/users')
            .then(res => {
                const users = res.data
                dispatch({
                    type: ADD_USER,
                    payload: users
                })
            })
            .catch(err => {
                console.log(err)
                dispatch(setError(err))
            })
    }
}

export const getState = ()=> {
    return (dispatch)=> {
        dispatch(setLoading())
        Axios.get('http://localhost:5000/users')
            .then(res => {
                const users = res.data
                dispatch({
                    type: ADD_USER,
                    payload: users
                })
            })
            .catch(err => {
                console.log(err)
                dispatch(setError(err))
            })
    }
}

export const addUser = (user)=> {
    return dispatch => {
        Axios.post('http://localhost:5000/post', user)
            .then(res => dispatch(getState()))
            .catch(err => {throw err})
    }
}

export const deleteUser = (id)=> {
    return dispatch => {
        Axios.delete(`http://localhost:5000/users/${id}`)
            .then(res => dispatch(getState()))
            .catch(err => {throw err})
    }
}

export const addCount = ()=> {
    return {
        type: ADD_COUNT
    }
}

export const setLoading = ()=> {
    return {
        type: SET_LOADING
    }
}

export const setError = (error)=> {
    return {
        type: SET_ERROR,
        payload: error
    }
}