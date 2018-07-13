import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import style from './Button_style';

const Wrapper = styled.button`${style};`;

const Button = ({ label, onClick }) =>
  <Wrapper onClick={onClick}>
    <span>
      {label}
    </span>
  </Wrapper>;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
