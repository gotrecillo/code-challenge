import React from 'react';
import styled from 'styled-components';
import styles from './CreateArticle_style';
import { TextField, TextAreaField } from '../../FormFields';

const Wrapper = styled.div`${styles.wrapper};`;

const CreateArticle = () =>
  <Wrapper>
    <TextField label="Title" />
    <TextField label="Author" />
    <TextField label="Tags" helpText="Separated by commas" />
    <TextAreaField label="Content" rows={25} />
    <TextAreaField label="Excerpt" rows={5} helpText="Will be generated from content if empty"/>
  </Wrapper>;

CreateArticle.propTypes = {};

export default CreateArticle;
