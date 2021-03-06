import { css } from 'styled-components';
import { fromTheme } from './theme';

export const flex = css`
  display: flex;
  flex-wrap: wrap;
`;

// Paper elevations
export const z1 = css`
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
`;

export const z2 = css`
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2);
`;

export const z3 = css`
  box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3), 0 11px 7px 0 rgba(0, 0, 0, 0.19);
`;

export const z4 = css`
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.3), 0 14px 12px 0 rgba(0, 0, 0, 0.17);
`;

export const z5 = css`
  box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3), 0 17px 17px 0 rgba(0, 0, 0, 0.15);
`;


export const card = css`
  border-radius: 2px;
  border: 1px solid transparent;
  ${z2}
  padding: 1rem;

  &:hover {
    border-color: ${fromTheme('primaryColor')};
  }
`;