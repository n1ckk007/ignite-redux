import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// redux setup
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
// connect react app to redux by using the provider
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

// combines dev tools and thunk
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store takes a reducer, rootReducer
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
