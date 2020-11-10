import * as actions from "./constants";

const initialState = {
    isLoading: false,
}


const sendDataReducer = (state = initialState, action) => {
    // console.log(action.payload,  "action.payloaaaaaad")
    switch (action.type) {
        case actions.SEND_DATA_REQUEST:
            return{
                ...state,
                isLoading: true,
            };
            case actions.SEND_DATA_SUCCESS:
                return{
                    ...state,
                    isLoading: false,
                    response: action.payload,
                };
                case actions.SEND_DATA_ERROR:
                    return{
                        ...state,
                        isLoading: false,
                        error: action.payload,
                    }
        default:
            return state;
    }
};

export default sendDataReducer;