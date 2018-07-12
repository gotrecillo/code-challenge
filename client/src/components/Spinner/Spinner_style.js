import { css, keyframes } from 'styled-components';
import { fromTheme } from '../../shared/theme';

const animation = keyframes`
  0%, 40%, 100% { 
    transform: scaleY(0.4);
  }
  20% { 
    transform: scaleY(1.0);
  }
`;

const style = css`
  margin: 100px auto;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
  
  & div {
    background-color: ${fromTheme('primaryColor')};
    height: 100%;
    width: 6px;
    display: inline-block;
    animation: ${animation} 1.2s infinite ease-in-out;
  }
  
  & div:nth-child(2) {
    animation-delay: -1.1s;
  }
  
  & div:nth-child(3) {
    animation-delay: -1.0s;
  }
  
  & div:nth-child(4) {
    animation-delay: -0.9s;
  }
  
  & div:nth-child(5) {
    animation-delay: -0.8s;
  }    
`;

export default style;
