import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const SIGNOUT = 'SIGNOUT'
export const ERROR = 'ERROR'
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS'
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED' 

const baseUrl = 'http://localhost:5000/api'

export const login = (username, password) => dispatch => {
    dispatch({type: LOGIN_START})
    return axios.post(`${baseUrl}/login`, {username,password}).then(res => {
        localStorage.setItem('authToken', res.data.payload)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data.payload
        })
    }).catch(err => {
        dispatch({
            type: ERROR,
            payload: err
        })
    })
}

export const signOut = () => {
    localStorage.removeItem('authToken')
    return {
        type: SIGNOUT
    }
}

export const checkIfAuthed = () => {
    if(localStorage.getItem('authToken')){
        return{
            type: LOGIN_SUCCESS
        }
    }
    return{
        type: ERROR
    }
}

export const getFriends = () => dispatch=> {
    dispatch({type: FETCHING_FRIENDS})
    axios.get(`${baseUrl}/friends`,{
        headers: {Authorization: localStorage.getItem('authToken')}
    }).then(res => {
        console.log(res.data)
        dispatch({
            type: FRIENDS_FETCHED,
            payload: res.data
        })
    }).catch(err => {
        console.log(err)
    })
}