import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styles from './ArticlesList_style';
import ArticleCard from '../ArticleCard/ArticleCard';
import LinkWrap from '../../LinkWrap/LinkWrap';
import Button from '../../Button/Button';

const Wrapper = styled.div`${styles.wrapper};`;
const Actions = styled.div`${styles.actions};`;

const ArticlesList = ({ articles, navigate }) =>
  <Fragment>
    <Actions>
      <LinkWrap to="/create">
        <Button label="Create" />
      </LinkWrap>
    </Actions>
    <Wrapper>
      {articles.map(article =>
        <ArticleCard key={article.id} article={article} navigate={navigate} />
      )}
    </Wrapper>
  </Fragment>;

ArticlesList.propTypes = {
  articles: PropTypes.array.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default ArticlesList;
