import styled from 'styled-components';
import styles from './styles';

export const Wrapper = styled.div`${styles.wrapper};`;
export const ColorBar = styled.span`${styles.colorBar};`;
export const GreyBar = styled.span`${styles.greyBar};`;
export const Input = styled.input`${styles.input};`;
export const TextArea = styled.textarea`${styles.input};`;
export const Label = styled.label`${styles.label};`;
export const HelpText = styled.label`${styles.helpText};`;

export { default as FormGroup } from './FormGroup';