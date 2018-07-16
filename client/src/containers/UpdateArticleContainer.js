import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UpdateArticle, NotFound, Spinner } from '../components';
import { connect } from 'react-redux';
import { fetchArticle, updateArticle } from '../actions';

const mapStateToProps = state => {
  const { article, fetching } = state.article;

  return { article, fetching };
};

const mapDispatchToProps = dispatch => ({
  fetchArticle: id => dispatch(fetchArticle.request(id)),
  updateArticle: article => dispatch(updateArticle.request(article)),
});

class UpdateArticleContainer extends Component {
  static propTypes = {
    updateArticle: PropTypes.func.isRequired,
    fetchArticle: PropTypes.func.isRequired,
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      id: PropTypes.string.isRequired,
    }),
    fetching: PropTypes.bool.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
    })
  };

  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.fetchArticle(id);
  }

  render() {
    const { updateArticle, fetching, article } = this.props;

    if (fetching) {
      return <Spinner />;
    }

    if (!article) {
      return (
        <NotFound text="The article that you are looking for does not exist" />
      );
    }

    return <UpdateArticle updateArticle={updateArticle} article={article} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  UpdateArticleContainer
);
