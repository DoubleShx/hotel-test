import ReduxThunk from "redux-thunk";  // to be able to use redux asynchronously
import { createStore, applyMiddleware, compose } from "redux"; // compose for testing purposes
import { rootReducer } from "./reducers/_rootRedicer";



const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(ReduxThunk))(createStore);
//const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);

export default createStoreWithMiddleware(rootReducer);