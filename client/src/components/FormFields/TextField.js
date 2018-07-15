import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input } from './shared';

const TextField = ({ label, helpText, ...otherProps }) =>
  <FormGroup
    label={label}
    helpText={helpText}
    input={<Input {...otherProps} required />}
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
