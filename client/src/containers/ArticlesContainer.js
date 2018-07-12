import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ArticlesList, Spinner } from '../components/index';
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
    const { articles, fetching } = this.props;

    if (fetching) {
      return <Spinner />;
    }

    return <ArticlesList articles={articles} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);
