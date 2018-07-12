import {
  FETCH_ARTICLES_DONE,
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_ERROR,
} from './constants';


export const fetchArticles = {
  request: () => ({ type: FETCH_ARTICLES_REQUEST }),
  done: payload => ({ type: FETCH_ARTICLES_DONE, payload }),
  error: () => ({ type: FETCH_ARTICLES_ERROR }),
};
