import { css } from 'styled-components';

const style = css`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
    }
    
    & p {
      color: initial;
    }
`;

export default style;
