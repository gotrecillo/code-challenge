import React from 'react';
import PropTypes from 'prop-types';
import { Label, Wrapper, ColorBar, GreyBar, HelpText } from './';

const FormGroup = ({ label, helpText, input }) =>
  <Wrapper>
    {input}
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

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  helpText: PropTypes.string,
};

export default FormGroup;
