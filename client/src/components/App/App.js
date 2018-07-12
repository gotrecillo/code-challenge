import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Header, Footer } from '../';
import theme from '../../shared/theme';
import ArticlesContainer from '../../containers/ArticlesContainer';
import styles from './App_style';
import store from '../../store';

const Wrapper = styled.div`${styles.wrapper};`;
const Main = styled.main`${styles.main};`;

const App = () =>
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header />
          <Main>
            <Switch>
              <Route exact path="/" component={ArticlesContainer} />
            </Switch>
          </Main>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>;

export default App;
