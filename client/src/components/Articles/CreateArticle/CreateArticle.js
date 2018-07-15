import React from 'react';
import styled from 'styled-components';
import styles from './CreateArticle_style';
import TextField from "../../TextField/TextField";

const Wrapper = styled.div`${styles.wrapper};`;

const CreateArticle = () =>
  <Wrapper>
    <TextField label="Title" />
    <TextField label="Author" />
    <TextField label="Tags" helpText="Separated by commas"/>
  </Wrapper>;

CreateArticle.propTypes = {
};

export default CreateArticle;
