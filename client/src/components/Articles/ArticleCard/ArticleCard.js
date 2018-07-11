import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './ArticleCard_style';

const Wrapper = styled.div`${styles.wrapper};`;
const Title = styled.h3`${styles.title};`;
const Excerpt = styled.p`${styles.excerpt};`;
const Author = styled.p`${styles.author};`;

const ArticleCard = ({ article }) =>
  <Wrapper>
    <Title>
      {article.title}
    </Title>
    <Excerpt>
      {article.excerpt}
    </Excerpt>
    <Author>
      {article.author}
    </Author>
  </Wrapper>;

ArticleCard.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
};
export default ArticleCard;
