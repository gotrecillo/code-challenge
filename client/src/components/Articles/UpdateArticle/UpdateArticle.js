import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './UpdateArticle_style';
import ArticleForm from '../ArticleForm/ArticleForm';

const Wrapper = styled.div`${styles.wrapper};`;

const UpdateArticle = ({ updateArticle, article }) =>
  <Wrapper>
    <ArticleForm action="Update" onSubmit={updateArticle} article={article} />
  </Wrapper>;

UpdateArticle.propTypes = {
  updateArticle: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
};

export default UpdateArticle;
