import { put, call, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import api from '../api';
import { fetchArticles } from '../actions';
import { FETCH_ARTICLES_REQUEST } from '../actions/constants';

export function* fetchArticlesSaga() {
  try {
    yield call(delay, 1000);
    const articles = yield call(api.fetchArticles);

    yield put(fetchArticles.done(articles));
  } catch (error) {
    yield put(fetchArticles.error());
  }
}

export default function* articlesSaga() {
  yield takeLatest(FETCH_ARTICLES_REQUEST, fetchArticlesSaga);
}
