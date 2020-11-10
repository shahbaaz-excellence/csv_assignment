import {combineReducers} from "redux";

import dataListReducer from "./reducer";
import sendDataReducer from "./sendReducer";

const rootReducer = combineReducers({
    getDataStatus: dataListReducer,
    sendDataStatus: sendDataReducer,
})

export default rootReducer;