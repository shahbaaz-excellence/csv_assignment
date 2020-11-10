import { put } from "redux-saga/effects";
import mock from "../Json/mock.json";
import { SendDataSuccess, SendDataError } from "../Redux/actions";

export function* sendDataSaga(action) {
    try {
        console.log("sagagagaga")
        let cogVal = action.payload.cog;
        let id = action.payload.id;

       const jsonData = mock.map(value => {

            if (value.id === id) {
                return {
                    ...value,
                    product_details: {
                        ...value.product_details, cogs: cogVal
                    },
                };
            } else {
                return value;
            }
        })

        mock.splice(0, mock.length, ...jsonData);

        yield put(SendDataSuccess("Success"))

        yield put(SendDataError("Error"))

    } catch (error) {
        yield put(SendDataError("404 not found"))
    }
}