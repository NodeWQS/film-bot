const ADD_USER = "ADD_USER"

export const userVerification = (state = { username: '' }, action) => {
    switch (action.type) {
        case ADD_USER:
            return { ...action.payload }
            break;    
        default:
            return state
            break;
    }
}

export const ADD_DATA = (payload) => ({ type: ADD_USER, payload })