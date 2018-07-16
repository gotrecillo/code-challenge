import { css } from 'styled-components';
import tinycolor from 'tinycolor2';
import { fromTheme } from '../../../shared/theme';
import { flex, z2 } from '../../../shared/styles';

const wrapper = css`
  width: 300px;
  border-radius: 2px;
  border: 1px solid transparent;
  ${z2}
  padding: 1rem;
  margin: 0.5rem;

  &:hover {
    border-color: ${fromTheme('primaryColor')};
    cursor: pointer;
  }
`;

const title = css`
  color: ${fromTheme('primaryColor')};
  font-weight: bolder;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const excerpt = css`
  text-align: justify;
`;

const author = css`
  font-style: oblique;
  align-self: flex-end;
`;

const pusher = css`
  flex-grow: 999;
`;

const footer = css`
  ${flex}
  margin-top: 0.5rem;
`;

const icon = css`
  color: ${fromTheme('primaryColor')};
  
  &:hover {
    color: ${props =>
      tinycolor(fromTheme('primaryColor')(props)).darken(10).toString()};
  }
`;

export default {
  wrapper,
  title,
  excerpt,
  author,
  footer,
  pusher,
  icon,
};
