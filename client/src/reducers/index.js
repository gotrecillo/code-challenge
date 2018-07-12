import { combineReducers } from 'redux';
import articles from './articles_reducer';
import article from './article_reducer';

export default combineReducers({ articles, article });
