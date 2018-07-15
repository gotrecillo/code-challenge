import React from 'react';
import styled from 'styled-components';
import styles from './CreateArticle_style';
import ArticleForm from '../ArticleForm/ArticleForm';

const Wrapper = styled.div`${styles.wrapper};`;

const CreateArticle = () =>
  <Wrapper>
    <ArticleForm action="Create" onSubmit={console.log} />
  </Wrapper>;

CreateArticle.propTypes = {};

export default CreateArticle;
