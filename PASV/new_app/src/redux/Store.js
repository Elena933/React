import {reducers} from "./Reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {applyMiddleware, legacy_createStore as createStore} from "redux";


export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
