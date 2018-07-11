import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Header, Footer } from '../';
import theme from '../../shared/theme';
import ArticlesContainer from '../../containers/ArticlesContainer';
import styles from './App_style';

const Wrapper = styled.div`${styles.wrapper}`;
const Main = styled.main`${styles.main}`;

const App = () =>
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Header />
      <Main>
        <ArticlesContainer />
      </Main>
      <Footer />
    </Wrapper>
  </ThemeProvider>;

export default App;
