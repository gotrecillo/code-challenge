import React from 'react';
import styled from 'styled-components';
import styles from './CreateArticle_style';
import {
  TextField,
  TextAreaField,
  CheckboxField,
} from '../../FormFields/index';

const Wrapper = styled.div`${styles.wrapper};`;

const CreateArticle = () =>
  <Wrapper>
    <TextField label="Title" />
    <TextField label="Author" />
    <TextField label="Tags" helpText="Separated by commas" />
    <TextAreaField label="Content" rows={15} />
    <TextAreaField
      label="Excerpt"
      rows={5}
      helpText="Will be generated from content if empty"
    />
    <CheckboxField id="published" label="Published"/>
  </Wrapper>;

CreateArticle.propTypes = {};

export default CreateArticle;
