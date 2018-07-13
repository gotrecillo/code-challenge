import { css } from 'styled-components';
import tinycolor from 'tinycolor2';
import { z1 } from '../../shared/styles';
import { fromTheme } from '../../shared/theme';

const style = css`
  padding: 0;

  border-width: 0;
  outline: none;
  border-radius: 2px;
  ${z1}

  background-color: ${fromTheme('primaryColor')};
  color: #fff;

  transition: background-color .3s;
  
  &:hover {
    background-color: ${(props) => tinycolor(fromTheme('primaryColor')(props)).darken(5).toString()};
  }
  
  
  & span {
    display: block;
    padding: 12px 24px;
  }
`;

export default style;
