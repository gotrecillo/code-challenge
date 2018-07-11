import { css } from 'styled-components';
import { flex } from '../../shared/styles';

const wrapper = css`
  ${flex}
  flex-direction: column;
  min-height: 100vh;
`;

const main = css`
  flex-grow: 1;
`;

export default {
  wrapper,
  main,
};
