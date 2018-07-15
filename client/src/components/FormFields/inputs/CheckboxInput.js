import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './styles';

const Wrapper = styled.div`${styles.checkbox.wrapper}`;
const Label = styled.label`${styles.checkbox.label}`;
const Input = styled.input`${styles.checkbox.input}`;

const CheckboxInput = ({ label, id, ...otherProps }) =>
  <Wrapper>
    <Input type="checkbox" id={id} {...otherProps} />
    <Label htmlFor={id}>
      {label}
    </Label>
  </Wrapper>;

CheckboxInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CheckboxInput;
