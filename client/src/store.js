import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import sagas, { sagaMiddleware } from './sagas';
import reducers from './reducers';

export const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(reducers),
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
  )
);

sagaMiddleware.run(sagas);

export default store;
