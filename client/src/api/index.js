import request from './request';
import { ARTICLES_QUERY } from './queries';

const fetchArticles = () =>
  request(ARTICLES_QUERY).then(
    response => response.data.articles,
    error => error
  );

export default {
  fetchArticles,
};
