import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArticle } from '../actions';
import { ArticleDetails, NotFound, Spinner } from '../components';

const mapStateToProps = state => {
  const { article, fetching } = state.article;

  return { article, fetching };
};

const mapDispatchToProps = dispatch => ({
  fetchArticle: id => dispatch(fetchArticle.request(id)),
});

class ArticleContainer extends Component {
  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
    fetching: PropTypes.bool.isRequired,
    fetchArticle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchArticle(id);
  }

  render() {
    const { fetching, article } = this.props;

    if (fetching) {
      return <Spinner />;
    }

    if (!article) {
      return (
        <NotFound text="The article that you are looking for does not exist" />
      );
    }

    return <ArticleDetails article={article} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);
