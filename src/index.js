import React from "react";
import ReactDom from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";
import {requireAuthorization} from "./store/action";
import {AuthorizationStatus} from "./const";
import {fetchOffersList, checkAuth} from "./store/api-actions";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

// store.dispatch(fetchOffersList());
// store.dispatch(checkAuth());

// ReactDom.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.querySelector(`#root`)
// );

Promise.all([
  store.dispatch(fetchOffersList()),
  store.dispatch(checkAuth()),
])
  .then(() => {
    ReactDom.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.querySelector(`#root`)
    );
  });
