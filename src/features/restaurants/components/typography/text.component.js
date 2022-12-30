/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

const defaultTextStyles = theme => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = theme => `
    font-size: ${theme.fontSizes.body};
`;

const hint = theme => `
    font-size: ${theme.fontSizes.body};
`;

const error = theme => `
    color: ${theme.colors.text.error};
`;

const caption = theme => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = theme => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {  
  body,
  label,
  caption,
  error,
  hint,
};
//Two dynamic properties have been added to the Text component to style them 
//props have been destructured as variants and theme
//deafultTextStyle will construct e default text style when a variant is not be assigned to the text
//Second property will be used when a variant is assigned to the text cpmponent
//varaints is an object contaning a number of keys. Each key represents a function
//the key will be passed from the props through the text component
//
export const Text = styled.Text`
  ${({theme}) => defaultTextStyles(theme)}
  ${({variant, theme}) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: 'body',
};
