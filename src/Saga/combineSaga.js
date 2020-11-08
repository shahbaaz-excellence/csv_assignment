import { all,takeLatest } from "redux-saga/effects";
import * as actions from '../Redux/actions';
import { dataListSaga } from "./getDataSaga";
 
function * watchAllSaga(){
    yield takeLatest (actions.GetDataRequest, dataListSaga)
}

export default function* rootSaga(){
    yield all ([watchAllSaga()]);
}