import request from './request';
import { ARTICLES_QUERY, ARTICLE_QUERY } from './queries';
import { DELETE_ARTICLE_MUTATION } from './mutation';

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
    response => response.data.article,
    error => error
  );

export default {
  fetchArticles,
  fetchArticle,
  deleteArticle,
};
