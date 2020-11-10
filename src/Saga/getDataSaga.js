import { put } from "redux-saga/effects";
import mock from "../Json/mock.json";
import { GetDataSuccess, GetDataError } from "../Redux/actions";

export function* dataListSaga(action) {
    try {

        const response = []
        mock.map(value => (
            response.push(
                {
                    id: value.id, 
                    variant: value.product_details.variant,
                    title: value.product_details.title,
                    sku: value.product_details.sku,
                    price: value.product_details.price,
                    cogs: value.product_details.cogs,
                }
            )
        ))

        if (response) {
            yield put(GetDataSuccess({ response }))
        } else {
            yield put(GetDataError("Error"))
        }
    } catch (error) {
        yield put(GetDataError("404 not found"))
    }
}