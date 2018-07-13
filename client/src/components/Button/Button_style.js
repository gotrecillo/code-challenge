import { css } from 'styled-components';
import tinycolor from 'tinycolor2';
import { z1 } from '../../shared/styles';
import { fromTheme } from '../../shared/theme';

const backgroundColor = props => {
  let color = 'primaryColor';

  if (props.disabled) {
    color = 'darkGray';
  } else if (props.variant) {
    color = props.variant;
  }

  return fromTheme(color)(props);
};

const hoverBackgroundColor = props => {
  const color = backgroundColor(props);
  if (props.disabled) {
    return color;
  }

  return tinycolor(color).darken(5).toString();
};

const style = css`
  padding: 0;
  border-width: 0;
  outline: none;
  border-radius: 2px;
  ${z1}
  background-color: ${backgroundColor};
  color: #fff;
  transition: background-color .3s;
  
  &:hover {
    background-color: ${hoverBackgroundColor};
  }

  & span {
    display: block;
    padding: 12px 24px;
  }
`;

export default style;
