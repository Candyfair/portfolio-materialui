// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from 'src/redux/reducers';
import logMiddleware from '../../middleware/logMiddleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {

};

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    // secondMiddleware,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  initialState,
  enhancers,
);

// == Export
export default store;
