import request from './request';
import { ARTICLES_QUERY, ARTICLE_QUERY } from './queries';
import {CREATE_ARTICLE_MUTATION, DELETE_ARTICLE_MUTATION} from './mutation';

const fetchArticles = () =>
  request(ARTICLES_QUERY).then(
    response => response.data.articles,
    error => error
  );

const fetchArticle = id =>
  request(ARTICLE_QUERY(id)).then(
    response => response.data.article,
    error => error
  );

const deleteArticle = id =>
  request(DELETE_ARTICLE_MUTATION(id)).then(
    response => response.data.deleteArticle,
    error => error
  );

const createArticle = article =>
  request(CREATE_ARTICLE_MUTATION(article)).then(
    response => response.data.createArticle,
    error => error
  );

export default {
  fetchArticles,
  fetchArticle,
  deleteArticle,
  createArticle,
};
