import { css } from 'styled-components';
import { flex } from '../../../shared/styles';

const actions = css`
  ${flex}
  justify-content: flex-end;
  
  & > * {
    margin-left: 1rem;
  }
`;

export default {
  actions,
};
