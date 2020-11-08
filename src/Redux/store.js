import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware} from "redux";
import rootReducer from "./combineReducer";
import rootSaga from "../Saga/combineSaga";

const sagaMiddleware = createSagaMiddleware();
 const store =createStore(
rootReducer,  applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
