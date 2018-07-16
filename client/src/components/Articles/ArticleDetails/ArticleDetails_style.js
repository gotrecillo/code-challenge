import { css } from 'styled-components';
import { fromTheme } from '../../../shared/theme';
import { card, flex } from '../../../shared/styles';

const wrapper = css`
  ${card}
  max-width: 900px;
  margin: 0.5rem auto;

`;

const title = css`
  color: ${fromTheme('primaryColor')};
  font-weight: bolder;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const content = css`
  text-align: justify;
`;

const author = css`
  margin-top: 0.5rem;
  font-style: oblique;
  text-align: right;
`;

const actions = css`
  margin-top: 2rem;
  ${flex}
  justify-content: flex-end;

  & > * {
    margin-left: 1rem;
  }
`;

export default {
  wrapper,
  title,
  content,
  author,
  actions,
};
