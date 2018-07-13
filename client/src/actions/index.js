import {
  FETCH_ARTICLES_DONE,
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_ERROR,
  FETCH_ARTICLE_DONE,
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_ERROR,
  DELETE_ARTICLE_DONE,
  DELETE_ARTICLE_REQUEST,
  DELETE_ARTICLE_ERROR,
} from './constants';


export const fetchArticles = {
  request: () => ({ type: FETCH_ARTICLES_REQUEST }),
  done: payload => ({ type: FETCH_ARTICLES_DONE, payload }),
  error: () => ({ type: FETCH_ARTICLES_ERROR }),
};

export const fetchArticle = {
  request: payload => ({ type: FETCH_ARTICLE_REQUEST, payload }),
  done: payload => ({ type: FETCH_ARTICLE_DONE, payload }),
  error: () => ({ type: FETCH_ARTICLE_ERROR }),
};

export const deleteArticle = {
  request: payload => ({ type: DELETE_ARTICLE_REQUEST, payload }),
  done: payload => ({ type: DELETE_ARTICLE_DONE, payload }),
  error: () => ({ type: DELETE_ARTICLE_ERROR }),
};
