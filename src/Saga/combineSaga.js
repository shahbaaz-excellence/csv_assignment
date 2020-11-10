import { all,takeLatest } from "redux-saga/effects";
import * as actions from '../Redux/actions';
import { dataListSaga } from "./getDataSaga";
import { sendDataSaga } from "./sendDataSaga";
 
function * watchAllSaga(){
    console.log("LLLLLLLLLLLlll")
    yield takeLatest (actions.GetDataRequest, dataListSaga)
    yield takeLatest (actions.SendDataRequest, sendDataSaga)
}

export default function* rootSaga(){
    yield all ([watchAllSaga()]);
}