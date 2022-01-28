const authReducer = (state = {
    user: '',
    isAuthenticated: false
}, action) => {
    switch (action.type) {
        case "LOGIN":
            console.log(action)
            state = { ...state, user: action.payload, username: action.username, isAuthenticated: true };
            break;
        case "LOGOUT":
            state = { ...state, user: '', username: '', isAuthenticated: false };
            break;
        default:
            break;
    };
    return state;
};

export default authReducer;