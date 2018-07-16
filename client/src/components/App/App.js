import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import styled, { ThemeProvider } from 'styled-components';
import { Header, Footer } from '../';
import theme from '../../shared/theme';
import {
  ArticlesContainer,
  ArticleContainer,
  CreateArticleContainer,
  UpdateArticleContainer,
} from '../../containers';
import styles from './App_style';
import store, { history } from '../../store';

const Wrapper = styled.div`${styles.wrapper};`;
const Main = styled.main`${styles.main};`;

const App = () =>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header />
          <Main>
            <Switch>
              <Route exact path="/" component={ArticlesContainer} />
              <Route path="/create" component={CreateArticleContainer} />
              <Route path="/:id/update" component={UpdateArticleContainer} />
              <Route path="/:id" component={ArticleContainer} />
            </Switch>
          </Main>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </ConnectedRouter>
  </Provider>;

export default App;
