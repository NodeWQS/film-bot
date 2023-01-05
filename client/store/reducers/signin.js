export const userVerification = (state = {}, action) => {
    switch (action.type) {
        case "ADD_USER":
            return { username: '' }
            break;
    
        default:
            return state
            break;
    }
}