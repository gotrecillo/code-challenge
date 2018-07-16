import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './ArticleDetails_style';
import Button from '../../Button/Button';
import LinkWrap from '../../LinkWrap/LinkWrap';

const Wrapper = styled.div`${styles.wrapper};`;
const Title = styled.h3`${styles.title};`;
const Content = styled.div`${styles.content};`;
const Actions = styled.div`${styles.actions};`;
const Author = styled.p`${styles.author};`;

const ArticleDetails = ({ article, deleteArticle, deleting }) =>
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
    <Actions>
      <Button
        variant="danger"
        label={deleting ? 'Deleting...' : 'Delete'}
        disabled={deleting}
        onClick={() => deleteArticle(article.id)}
      />
      <LinkWrap to={`/${article.id}/update`}>
        <Button label="Update" />
      </LinkWrap>
    </Actions>
  </Wrapper>;

ArticleDetails.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
  deleteArticle: PropTypes.func.isRequired,
  deleting: PropTypes.bool.isRequired,
};
export default ArticleDetails;
