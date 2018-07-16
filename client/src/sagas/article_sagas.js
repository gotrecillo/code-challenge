import { put, call, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { push } from 'connected-react-router';
import api from '../api';
import actions from '../actions';
import {
  DELETE_ARTICLE_REQUEST,
  FETCH_ARTICLE_REQUEST,
  CREATE_ARTICLE_REQUEST,
  UPDATE_ARTICLE_REQUEST,
} from '../actions/constants';

const makeSaga = (name, redirects = true) => {
  const actionCreator = actions[name];

  return function* (action) {
    try {
      yield call(delay, 1000);

      const article = yield call(api[name], action.payload);
      yield put(actionCreator.done(article));
      if (redirects) {
        yield put(push('/'))
      }
    } catch (error) {
      yield put(actionCreator.error());
    }
  }
};

const fetchArticleSaga = makeSaga('fetchArticle',  false);
const createArticleSaga = makeSaga('createArticle');
const updateArticleSaga = makeSaga('updateArticle');
const deleteArticleSaga = makeSaga('deleteArticle');

export default function* articlesSaga() {
  yield takeLatest(FETCH_ARTICLE_REQUEST, fetchArticleSaga);
  yield takeLatest(DELETE_ARTICLE_REQUEST, deleteArticleSaga);
  yield takeLatest(CREATE_ARTICLE_REQUEST, createArticleSaga);
  yield takeLatest(UPDATE_ARTICLE_REQUEST, updateArticleSaga);
}
