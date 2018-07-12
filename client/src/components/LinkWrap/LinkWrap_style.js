import { css } from 'styled-components';
import { card } from '../../shared/styles';
import { fromTheme } from '../../shared/theme';

const wrapper = css`
  ${card}
  width: 600px;
  margin: 3.5rem auto 0 auto;
`;

const text = css`
  color: ${fromTheme('primaryColor')};
  font-weight: bolder;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export default {
  wrapper,
  text,
};
