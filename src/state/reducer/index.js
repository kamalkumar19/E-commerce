import { combineReducers } from "redux";
import amountReducer from "./amountreducer";

const reducer = combineReducers({
    amount: amountReducer
})

export default reducer