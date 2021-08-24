import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from 'react-native';
import theme from '../../../global/styles/theme';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

type InputSelectProps = TouchableOpacityProps;

const InputSelect = ({ ...rest }: InputSelectProps): JSX.Element => {
  return (
    <TouchableOpacity
      style={styles.containerInput}
      {...rest}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>Categoria</Text>
      <Feather name="chevron-down" color={theme.colors.primary} size={20} />
    </TouchableOpacity>
  );
};

export default InputSelect;
