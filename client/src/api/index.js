import request from './request';
import { ARTICLES_QUERY, ARTICLE_QUERY } from './queries';
import {
  CREATE_ARTICLE_MUTATION,
  DELETE_ARTICLE_MUTATION,
  UPDATE_ARTICLE_MUTATION,
} from './mutation';

const graphqlRequest = (gql, key) => args =>
  request(gql(args)).then(response => response.data[key], error => error);

const fetchArticles = graphqlRequest(ARTICLES_QUERY, 'articles');
const fetchArticle = graphqlRequest(ARTICLE_QUERY, 'article');
const deleteArticle = graphqlRequest(DELETE_ARTICLE_MUTATION, 'deleteArticle');
const createArticle = graphqlRequest(CREATE_ARTICLE_MUTATION, 'createArticle');
const updateArticle = graphqlRequest(UPDATE_ARTICLE_MUTATION, 'updateArticle');

export default {
  fetchArticles,
  fetchArticle,
  deleteArticle,
  createArticle,
  updateArticle,
};
