

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as productReducer } from "./productReducer/reducer";

const rootStore = combineReducers({
    authReducer,
    productReducer
})

export const store = legacy_createStore(rootStore , applyMiddleware(thunk))