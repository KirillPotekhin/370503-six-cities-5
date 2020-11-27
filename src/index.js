import React from "react";
import ReactDom from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {reducer} from "./store/reducer";
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";

const api = createAPI(() => {});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(api))
);
console.log(store.getState());

ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
