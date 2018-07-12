import {
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_DONE,
  FETCH_ARTICLES_ERROR,
} from '../actions/constants';

const initialState = {
  fetching: false,
  error: false,
  articles: [],
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_REQUEST:
      return {
        articles: [],
        fetching: true,
        error: false,
      };

    case FETCH_ARTICLES_DONE:
      return {
        ...state,
        fetching: false,
        articles: action.payload,
      };

    case FETCH_ARTICLES_ERROR:
      return {
        ...state,
        fetching: false,
        error: true,
        articles: [],
      };

    default:
      return state;
  }
};

export default articlesReducer;
