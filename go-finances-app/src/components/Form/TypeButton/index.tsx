import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import theme from '../../../global/styles/theme';

import { styles } from './styles';
import { useState } from 'react';

interface ITypeButtonProps extends TouchableOpacityProps {
  label: 'Income' | 'Outcome';
}

const shouldBeActive = (label: 'Income' | 'Outcome', isActive: boolean) => {
  if (label === 'Income' && isActive) {
    return [styles.container, styles.activeIncome];
  } else if (label === 'Outcome' && isActive) {
    return [styles.container, styles.activeOutcome];
  } else {
    return [styles.container, styles.border];
  }
};

const TypeButton = ({ label, ...rest }: ITypeButtonProps): JSX.Element => {
  const [shouldActive, setActive] = useState(false);

  return (
    <TouchableOpacity
      {...rest}
      style={shouldBeActive(label, shouldActive)}
      activeOpacity={0.8}
      onPress={() => setActive(!shouldActive)}
    >
      {label === 'Income' ? (
        <Feather
          name="arrow-up-circle"
          size={24}
          color={theme.colors.success}
        />
      ) : (
        <Feather
          name="arrow-down-circle"
          size={24}
          color={theme.colors.attention}
        />
      )}
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TypeButton;
