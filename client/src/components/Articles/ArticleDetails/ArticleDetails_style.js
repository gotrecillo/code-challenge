import { css } from 'styled-components';
import { fromTheme } from '../../../shared/theme';
import { z2 } from '../../../shared/styles';

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
  margin-top: 0.5rem;
  font-style: oblique;
  text-align: right;
`;

export default {
  wrapper,
  title,
  excerpt,
  author,
};
