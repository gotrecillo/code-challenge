import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { ArticlesList, Spinner } from '../components/index';
import { fetchArticles } from '../actions';

const mapStateToProps = state => {
  const { articles, fetching } = state.articles;

  return { articles, fetching };
};

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles.request()),
  navigate: url => dispatch(push(url)),
});

class ArticlesContainer extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
    fetchArticles: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.fetchArticles();
  }

  render() {
    const { articles, fetching, navigate } = this.props;

    if (fetching) {
      return <Spinner />;
    }

    return <ArticlesList articles={articles} navigate={navigate} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);
