import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './NotFound_style';

const Wrapper = styled.div`${styles.wrapper};`;
const Text = styled.h3`${styles.text};`;

const NotFound = ({
  text = 'The page that you are looking for does not exist',
}) =>
  <Wrapper>
    <Text>
      {text}
    </Text>
  </Wrapper>;

NotFound.propTypes = {
  text: PropTypes.string,
};
export default NotFound;
