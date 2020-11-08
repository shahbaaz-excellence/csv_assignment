import { createAction } from "redux-actions";
import * as actions from "./constants";

export const GetDataRequest = createAction(actions.GET_DATA_REQUEST);
export const GetDataSuccess = createAction(actions.GET_DATA_SUCCESS);
export const GetDataError = createAction(actions.GET_DATA_ERROR);