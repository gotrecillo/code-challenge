import { put, call, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { push } from 'connected-react-router';
import api from '../api';
import { fetchArticle, deleteArticle, createArticle } from '../actions';
import {
  DELETE_ARTICLE_REQUEST,
  FETCH_ARTICLE_REQUEST,
  CREATE_ARTICLE_REQUEST,
} from '../actions/constants';

export function* fetchArticleSaga(action) {
  try {
    yield call(delay, 1000);

    const article = yield call(api.fetchArticle, action.payload);
    yield put(fetchArticle.done(article));
  } catch (error) {
    yield put(fetchArticle.error());
  }
}

export function* deleteArticleSaga(action) {
  try {
    yield call(delay, 1000);

    const article = yield call(api.deleteArticle, action.payload);
    yield put(deleteArticle.done(article));
    yield put(push('/'));
  } catch (error) {
    yield put(deleteArticle.error());
  }
}

export function* createArticleSaga(action) {
  try {
    yield call(delay, 1000);

    const article = yield call(api.createArticle, action.payload);
    yield put(createArticle.done(article));
    yield put(push('/'));
  } catch (error) {
    yield put(createArticle.error());
  }
}

export default function* articlesSaga() {
  yield takeLatest(FETCH_ARTICLE_REQUEST, fetchArticleSaga);
  yield takeLatest(DELETE_ARTICLE_REQUEST, deleteArticleSaga);
  yield takeLatest(CREATE_ARTICLE_REQUEST, createArticleSaga);
}
