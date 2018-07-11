import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styles from './ArticlesList_style';
import ArticleCard from '../ArticleCard/ArticleCard';

const Wrapper = styled.div`${styles.wrapper};`;

const ArticlesList = ({ articles }) =>
  <Wrapper>
    {articles.map(article =>
      <ArticleCard key={article.id} article={article} />
    )}
  </Wrapper>;

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ArticlesList;
