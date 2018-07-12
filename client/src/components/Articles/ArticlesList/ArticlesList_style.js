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

export default {
  wrapper,
};
