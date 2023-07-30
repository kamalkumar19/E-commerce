export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'Add',
            Load: amount
        })
    }
}