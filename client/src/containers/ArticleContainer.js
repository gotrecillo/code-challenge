import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArticle, deleteArticle } from '../actions';
import { ArticleDetails, NotFound, Spinner } from '../components';

const mapStateToProps = state => {
  const { article, fetching, deleting } = state.article;

  return { article, fetching, deleting };
};

const mapDispatchToProps = dispatch => ({
  fetchArticle: id => dispatch(fetchArticle.request(id)),
  deleteArticle: id => dispatch(deleteArticle.request(id)),
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
    deleting: PropTypes.bool.isRequired,
    fetchArticle: PropTypes.func.isRequired,
    deleteArticle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchArticle(id);
  }

  render() {
    const { fetching, article, deleteArticle, deleting } = this.props;

    if (fetching) {
      return <Spinner />;
    }

    if (!article) {
      return (
        <NotFound text="The article that you are looking for does not exist" />
      );
    }

    return (
      <ArticleDetails
        article={article}
        deleteArticle={deleteArticle}
        deleting={deleting}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);
