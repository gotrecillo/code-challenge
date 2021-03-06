import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import articles from './articles_sagas';
import article from './article_sagas';

export const sagaMiddleware = createSagaMiddleware();

export default function* rootSaga() {

  yield all([
    fork(articles),
    fork(article),
  ]);
}

