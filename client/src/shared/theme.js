const theme = {
  primaryColor: '#009c05',
  lightGray: '#9c9c9c',
};

export const fromTheme = key => props => props.theme[key];

export default theme;
