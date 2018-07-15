import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './CreateArticle_style';
import ArticleForm from '../ArticleForm/ArticleForm';

const Wrapper = styled.div`${styles.wrapper};`;

const CreateArticle = ({ createArticle }) =>
  <Wrapper>
    <ArticleForm action="Create" onSubmit={createArticle} />
  </Wrapper>;

CreateArticle.propTypes = {
  createArticle: PropTypes.func.isRequired,
};

export default CreateArticle;
