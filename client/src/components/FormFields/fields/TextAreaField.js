import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from '../shared/index';
import { TextAreaInput } from '../inputs/index';

const TextAreaField = ({ label, helpText, ...otherProps }) =>
  <FormGroup
    label={label}
    helpText={helpText}
    input={<TextAreaInput {...otherProps} required />}
  />;

TextAreaField.propTypes = {
  label: PropTypes.string.isRequired,
  helpText: PropTypes.string,
  rows: PropTypes.number,
};

TextAreaField.defaultProps = {
  rows: 5,
};

export default TextAreaField;
