import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './ArticleCard_style';
import LinkWrap from '../../LinkWrap/LinkWrap';

const Wrapper = styled.div`${styles.wrapper};`;
const Title = styled.h3`${styles.title};`;
const Excerpt = styled.p`${styles.excerpt};`;
const Author = styled.p`${styles.author};`;

const ArticleCard = ({ article }) =>
  <LinkWrap to={`/${article.id}`}>
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
    </Wrapper>
  </LinkWrap>;

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
};
export default ArticleCard;
