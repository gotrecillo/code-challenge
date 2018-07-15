import { css } from 'styled-components';
import { flex } from '../../../shared/styles';

const wrapper = css`
  ${flex}
  justify-content: space-between;
  padding: 1rem;

  &:after {
    content: "";
    flex: auto;
  }
`;

const actions = css`
  padding: 1rem 0 0 1.5rem;
`;

export default {
  wrapper,
  actions,
};
