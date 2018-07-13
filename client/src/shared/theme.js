const theme = {
  primaryColor: '#009c05',
  lightGray: '#9c9c9c',
  darkGray: '#898989',
  danger: '#9C302F',
  warning: '#9C6D29',
  info: '#3C679C',
};

export const fromTheme = key => props => props.theme[key];

export default theme;
