import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import theme from '../../../global/styles/theme';

import { styles } from './styles';

type InputProps = TextInputProps;

const Input = ({ ...rest }: InputProps): JSX.Element => {
  return (
    <TextInput
      {...rest}
      style={styles.containerInput}
      placeholderTextColor={theme.colors.textMediumGray}
    />
  );
};

export default Input;
