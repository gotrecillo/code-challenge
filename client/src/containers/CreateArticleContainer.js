import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CreateArticle } from '../components/index';
import { connect } from 'react-redux';
import { createArticle } from '../actions';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  createArticle: article => dispatch(createArticle.request(article)),
});

class CreateArticleContainer extends Component {
  static propTypes = {
    createArticle: PropTypes.func.isRequired,
  };

  render() {
    const { createArticle } = this.props;

    return <CreateArticle createArticle={createArticle} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  CreateArticleContainer
);
