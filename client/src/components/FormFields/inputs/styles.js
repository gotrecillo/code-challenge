import { css } from 'styled-components';
import {fromTheme} from "../../../shared/theme";

const input = css`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  resize: none;

  &:focus {
    outline:none;
  }
`;

const checkbox = {
  wrapper: css`
    position: relative;
    margin: 16px 0;
    text-align: left;
  `,

  label: css`
    cursor: pointer;
    &:before, &:after {
      content: "";
      position: absolute;
      left:0;
      top: 0;
      box-sizing: border-box;
    }

    &:before {
      width: 20px;
      height: 20px;
      background: #fff;
      border: 2px solid rgba(0, 0, 0, 0.54);
      border-radius: 2px;
      cursor: pointer;
      transition: background .3s;
    }
    
    &:after {
      transition: transform .3s;
    }
    
    input:checked ~ &:before {
      background: ${fromTheme('primaryColor')};
      border:none;
    }
    
    input:checked ~ &:after {
      transform: rotate(-45deg);
      top: 5px;
      left: 4px;
      width: 12px;
      height: 6px;
      border: 2px solid #fff;
      border-top-style: none;
      border-right-style: none;
    }
  }`,
  input: css`
    outline: 0;
    margin-right: 10px;
    visibility: hidden;
  `
};

export default {
  input,
  checkbox,
};
