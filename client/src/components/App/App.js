import React from 'react';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { Header, Footer } from '../';
import theme from '../../shared/theme';
import ArticlesContainer from '../../containers/ArticlesContainer';
import styles from './App_style';
import store from '../../store';

const Wrapper = styled.div`${styles.wrapper};`;
const Main = styled.main`${styles.main};`;

const App = () =>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <Main>
          <ArticlesContainer />
        </Main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  </Provider>;

export default App;
