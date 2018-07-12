import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ArticlesList } from '../components/index';
import { fetchArticles } from '../actions';

const mapStateToProps = state => {
  const { articles, fetching } = state.articles;

  return { articles, fetching };
};

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles.request()),
});

class ArticlesContainer extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
    fetchArticles: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.fetchArticles();
  }

  render() {
    return <ArticlesList articles={this.props.articles} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);
