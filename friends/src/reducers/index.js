import {LOGIN_START, LOGIN_SUCCESS, ERROR, FETCHING_FRIENDS, FRIENDS_FETCHED, SIGNOUT} from '../actions'

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    isAuthed: false,
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
                loggingIn: false,
                isAuthed: true,
            }
        case ERROR: 
            return {
                ...state,
                loggingIn: false,
                error: action.payload
            }
        case SIGNOUT:
            return {
                ...state,
                isAuthed: false
            }
        case FETCHING_FRIENDS:
            return {
                ...state,
                fetchingFriends: true
            }
        case FRIENDS_FETCHED:
            return {
                ...state,
                fetchingFriends: false,
                friends: action.payload
            }
        default: 
            return state
    }
}