// import { applyMiddleware, compose, legacy_createStore } from "redux";
// import thunk from "redux-thunk";
// import { AppReducer } from "./reducer";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = legacy_createStore(
//   AppReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;


import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux'
import { AppReducer } from "./reducer";


const rootReducer = combineReducers({userData:AppReducer})

const Thunk = (store)=> (next)=> (action)=> {
    console.log("type of action")

    if(typeof action ==="function"){
        return action(store.dispatch)
    }
    next(action)
}

const composeEnhancers =
  typeof window === 'object' &&
  window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ? window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(Thunk),
        // other store enhancers if any
      );

const store = legacy_createStore(rootReducer,enhancer)

export default store
