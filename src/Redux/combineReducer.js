import {combineReducers} from "redux";

import dataListReducer from "./reducer";

const rootReducer = combineReducers({
    getDataStatus: dataListReducer,
})

export default rootReducer;