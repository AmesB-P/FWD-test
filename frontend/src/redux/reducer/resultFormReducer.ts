

const INIT_STATE = {}

const resultFormReducer = (state:any = INIT_STATE , action :any) => {
    switch (action.type) {
        case "RESULT_GET_PRODUCT_FORM":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default resultFormReducer