import { css } from 'styled-components';
import { fromTheme } from '../../shared/theme';

const wrapper = css`
  position: relative; 
  margin-bottom: 45px; 
  margin-top: 20px;
  width: 100%; 
`;

const greyBar = css`
  position:relative;
  display:block;

  &:before {
    content:'';
    height: 1px; 
    width: 100%;
    bottom: 1px; 
    position: absolute;
    
    background: #757575;  
  }
`;

const colorBar = css`
  position:relative;
  display:block;

  &:before {
    content:'';
    height: 2px; 
    width: 0;
    bottom: 1px; 
    position: absolute;
    background: ${fromTheme('primaryColor')}; 
    transition: 0.2s ease all; 
  }

  input:focus ~ &:before {
    width: 100%;
  }
`;

const input = css`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;

  &:focus {
    outline:none;
  }
`;

const label = css`
  color: #999; 
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;

  // input:valid is a hack to make it behave like material inputs
  input:focus ~ &, input:valid ~ & {
    top:-20px;
    font-size:14px;
    color: ${fromTheme('primaryColor')};
  }
`;

const helpText = css`
  color: #999; 
  font-size: 0.9rem;
  position: relative;
  top: 2px;
`;

export default {
  wrapper,
  greyBar,
  colorBar,
  input,
  label,
  helpText,
};
