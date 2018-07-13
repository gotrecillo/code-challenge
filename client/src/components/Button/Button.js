import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import style from './Button_style';

const Wrapper = styled.button`${style};`;

const Button = ({ label, ...otherProps }) =>
  <Wrapper {...otherProps}>
    <span>
      {label}
    </span>
  </Wrapper>;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['danger', 'warning', 'info']),
};

export default Button;
