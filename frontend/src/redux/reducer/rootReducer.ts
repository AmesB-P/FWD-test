import {combineReducers} from "@reduxjs/toolkit";
import resultFormReducer from "./resultFormReducer";

const rootReducer = combineReducers({
 benefit : resultFormReducer
})
export default rootReducer;