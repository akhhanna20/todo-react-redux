import reducer from "./Reducer";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools(applyMiddleware())
);

export default store;