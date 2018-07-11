import { css } from 'styled-components';
import { fromTheme } from '../../shared/theme';

const wrapper = css`
  margin: 0;
  text-align: center;
  padding: 0.25rem;
  color: #fff;
  background-color: ${fromTheme('lightGray')};
`;

export default {
  wrapper,
};
