import { css } from 'styled-components';
import { fromTheme } from '../../shared/theme';

const wrapper = css`
  margin: 0;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  color: #fff;
  font-weight: bolder;
  background-color: ${fromTheme('primaryColor')}
`;

export default {
  wrapper,
};
