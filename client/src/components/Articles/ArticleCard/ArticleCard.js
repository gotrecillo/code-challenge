import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './ArticleCard_style';
import LinkWrap from '../../LinkWrap/LinkWrap';

const Wrapper = styled.div`${styles.wrapper};`;
const Title = styled.h3`${styles.title};`;
const Excerpt = styled.p`${styles.excerpt};`;
const Author = styled.p`${styles.author};`;
const Footer = styled.div`${styles.footer};`;
const Pusher = styled.div`${styles.pusher};`;
const Icon = styled.i`${styles.icon};`;

const ArticleCard = ({ article, navigate }) =>
  <LinkWrap to={`/${article.id}`}>
    <Wrapper>
      <Title>
        {article.title}
      </Title>
      <Excerpt>
        {article.excerpt}
      </Excerpt>
      <Footer>
        <Icon
          className="material-icons"
          onClick={e => {
            e.preventDefault();
            navigate(`/${article.id}/update`);
          }}
        >
          edit
        </Icon>
        <Pusher />
        <Author>
          {article.author}
        </Author>
      </Footer>
    </Wrapper>
  </LinkWrap>;

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
  navigate: PropTypes.func.isRequired,
};
export default ArticleCard;
