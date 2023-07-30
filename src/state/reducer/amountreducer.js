const reducer = (state = 0, action) => {
    if (action.type === 'Add') {
        return state + action.Load;
    } else {
        return state;
    }
}

export default reducer;