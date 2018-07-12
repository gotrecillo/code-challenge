import { put, call, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import api from '../api';
import { fetchArticle } from '../actions';
import { FETCH_ARTICLE_REQUEST } from '../actions/constants';

export function* fetchArticleSaga(action) {
  try {
    yield call(delay, 1000);
    const article = yield call(api.fetchArticle, action.payload);

    yield put(fetchArticle.done(article));
  } catch (error) {
    yield put(fetchArticle.error());
  }
}

export default function* articlesSaga() {
  yield takeLatest(FETCH_ARTICLE_REQUEST, fetchArticleSaga);
}
