import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  TextField,
  TextAreaField,
  CheckboxField,
} from '../../FormFields/index';
import Button from '../../Button/Button';
import LinkWrap from '../../LinkWrap/LinkWrap';
import styles from './ArticleForm_style';

const Actions = styled.div`${styles.actions};`;

class ArticleForm extends Component {
  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      content: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
      published: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    }),
    action: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    article: {
      title: '',
      author: '',
      tags: [],
      content: '',
      excerpt: '',
      published: true,
      id: 'placeholder',
    },
  };

  constructor(props) {
    super(props);

    const tags = props.article.tags.join(',');
    this.state = { article: { ...props.article, tags } };
  }

  change = key => {
    return e => {
      const article = { ...this.state.article, [key]: e.target.value };
      this.setState({ article });
    };
  };

  changeCheckbox = key => {
    return e => {
      const article = { ...this.state.article, [key]: e.target.checked };
      this.setState({ article });
    };
  };

  submit = () => {
    this.props.onSubmit(this.state.article);
  };

  render() {
    const { action } = this.props;

    const {
      article: { title, author, tags, content, excerpt, published },
    } = this.state;

    return (
      <Fragment>
        <TextField
          label="Title"
          value={title}
          onChange={this.change('title')}
        />
        <TextField
          label="Author"
          value={author}
          onChange={this.change('author')}
        />
        <TextField
          label="Tags"
          helpText="Separated by commas"
          value={tags}
          onChange={this.change('tags')}
        />
        <TextAreaField
          label="Content"
          rows={15}
          value={content}
          onChange={this.change('content')}
        />
        <TextAreaField
          label="Excerpt"
          rows={5}
          helpText="Will be generated from content if empty"
          value={excerpt}
          onChange={this.change('excerpt')}
        />
        <CheckboxField
          id="published"
          label="Published"
          checked={published}
          onChange={this.changeCheckbox('published')}
        />
        <Actions>
          <LinkWrap to="/">
            <Button label="Cancel" variant="danger" />
          </LinkWrap>
          <Button label={action} onClick={this.submit} />
        </Actions>
      </Fragment>
    );
  }
}

export default ArticleForm;
