import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED} from '../actions'

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false
            }
        case LOGIN_FAILED: 
            return {
                ...state,
                loggingIn: false,
            }
        default: 
            return state
    }
}