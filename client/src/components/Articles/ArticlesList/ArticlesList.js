import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styles from './ArticlesList_style';
import ArticleCard from '../ArticleCard/ArticleCard';
import LinkWrap from '../../LinkWrap/LinkWrap';
import Button from '../../Button/Button';

const Wrapper = styled.div`${styles.wrapper};`;
const Actions = styled.div`${styles.actions};`;

const ArticlesList = ({ articles }) =>
  <Fragment>
    <Actions>
      <LinkWrap to="/create">
        <Button label="Create" />
      </LinkWrap>
    </Actions>
    <Wrapper>
      {articles.map(article =>
        <ArticleCard key={article.id} article={article} />
      )}
    </Wrapper>
  </Fragment>;

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ArticlesList;
