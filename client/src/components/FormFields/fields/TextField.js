import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from '../shared/index';
import { TextInput } from '../inputs/index';

const TextField = ({ label, helpText, ...otherProps }) =>
  <FormGroup
    label={label}
    helpText={helpText}
    input={<TextInput {...otherProps} required />}
  />;

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  helpText: PropTypes.string,
  type: PropTypes.string,
};

TextField.defaultProps = {
  type: 'text',
};

export default TextField;
