import React, { Component } from 'react';
import request from '../request';
import { ARTICLES_QUERY } from '../queries';
import { ArticlesList } from '../components/index';

class ArticlesContainer extends Component {
  state = { loading: true, articles: [] };

  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({
        articles: response.data.articles,
        loading: false,
      });
    });
  }

  render() {
    return <ArticlesList articles={this.state.articles} />;
  }
}

export default ArticlesContainer;
