import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './TextField_style';

const Wrapper = styled.div`${styles.wrapper};`;
const ColorBar = styled.span`${styles.colorBar};`;
const GreyBar = styled.span`${styles.greyBar};`;
const Input = styled.input`${styles.input};`;
const Label = styled.label`${styles.label};`;
const HelpText = styled.label`${styles.helpText};`;

const TextField = ({ label, helpText, ...otherProps }) =>
  <Wrapper>
    <Input {...otherProps} required />
    <ColorBar />
    <GreyBar />
    <Label>
      {label}
    </Label>
    {helpText &&
      <HelpText>
        {helpText}
      </HelpText>}
  </Wrapper>;

TextField.propTypes = {
  label: PropTypes.string.isRequired,
};

TextField.defaultProps = {
  type: 'text',
  helpText: false,
};

export default TextField;
