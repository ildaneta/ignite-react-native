import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import theme from '../../../global/styles/theme';

import { styles } from './styles';

interface IInputProps extends TextInputProps {
  hasError: boolean;
}

const Input = ({ hasError, ...rest }: IInputProps): JSX.Element => {
  return (
    <TextInput
      {...rest}
      style={
        hasError
          ? [styles.containerInput, styles.inputError]
          : styles.containerInput
      }
      placeholderTextColor={theme.colors.background_gray}
    />
  );
};

export default Input;
