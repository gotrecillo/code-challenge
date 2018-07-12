import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './ArticleDetails_style';

const Wrapper = styled.div`${styles.wrapper};`;
const Title = styled.h3`${styles.title};`;
const Content = styled.div`${styles.content};`;
const Author = styled.p`${styles.author};`;

const ArticleDetails = ({ article }) =>
  <Wrapper>
    <Title>
      {article.title}
    </Title>
    <Content>
      {article.content}
    </Content>
    <Author>
      {article.author}
    </Author>
  </Wrapper>;

ArticleDetails.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
};
export default ArticleDetails;
