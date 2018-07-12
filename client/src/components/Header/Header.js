import React from 'react';
import styled from 'styled-components';
import styles from './Header_style';
import LinkWrap from '../LinkWrap/LinkWrap';

const Wrapper = styled.h2`${styles.wrapper};`;

const Header = () =>
  <LinkWrap to="/">
    <Wrapper>Billing code challenge</Wrapper>
  </LinkWrap>;

export default Header;
