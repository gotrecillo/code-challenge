import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, TextArea } from './shared';

const TextAreaField = ({ label, helpText, ...otherProps }) =>
  <FormGroup
    label={label}
    helpText={helpText}
    input={<TextArea {...otherProps} required />}
  />;

TextAreaField.propTypes = {
  label: PropTypes.string.isRequired,
  helpText: PropTypes.string,
  rows: PropTypes.number,
};

TextArea.defaultProps = {
  rows: 5,
};

export default TextAreaField;
