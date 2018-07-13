import {
  FETCH_ARTICLE_REQUEST,
  FETCH_ARTICLE_DONE,
  FETCH_ARTICLE_ERROR,
  DELETE_ARTICLE_REQUEST,
} from '../actions/constants';

const initialState = {
  fetching: true,
  error: false,
  article: null,
  deleting: false,
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_REQUEST:
      return {
        article: null,
        fetching: true,
        error: false,
        deleting: false,
      };

    case FETCH_ARTICLE_DONE:
      return {
        ...state,
        fetching: false,
        article: action.payload,
      };

    case FETCH_ARTICLE_ERROR:
      return {
        ...state,
        fetching: false,
        error: true,
        article: null,
      };

    case DELETE_ARTICLE_REQUEST:
      return {
        ...state,
        deleting: true,
      };

    default:
      return state;
  }
};

export default articleReducer;
