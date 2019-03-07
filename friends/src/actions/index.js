import axios from 'axios'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

const baseUrl = 'http://localhost:5000/api'

export const login = (username, password) => dispatch => {
    dispatch({type: LOGIN_START})
    axios.post(`${baseUrl}/login`, {username,password}).then(res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                
            }
        })
        console.log(res)
    }).catch(err => {
        dispatch({
            type: LOGIN_FAILED
        })
        
        console.log(err)
    })
}