import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

type ErrorTextProp = {
  errorMessage: string;
};

const ErrorText = ({ errorMessage }: ErrorTextProp): JSX.Element => {
  return <Text style={styles.error}>{errorMessage}</Text>;
};

export default ErrorText;
