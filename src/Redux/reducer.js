import * as actions from "./constants";

const initialState = {
    isDataFetched: false,
    isError: false,
    isLoading: false,
    dataList: [],
}

const dataListReducer = (state = initialState, action) => {
    // console.log(action.payload,  "action.payloaaaaaad")
    switch (action.type) {
        case actions.GET_DATA_REQUEST:
            return{
                ...state,
                isLoading: true,
            };
            case actions.GET_DATA_SUCCESS:
                return{
                    ...state,
                    isLoading: false,
                    isDataFetched: true,
                    dataList: action.payload,
                };
                case actions.GET_DATA_ERROR:
                    return{
                        ...state,
                        isDataFetched: false,
                        isError: true,
                        isLoading: false,
                        error: action.payload,
                    }
        default:
            return state;
    }
};

export default dataListReducer;