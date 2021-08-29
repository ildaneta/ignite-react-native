import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import theme from '../../../global/styles/theme';

import { styles } from './styles';

type ButtonType = 'Income' | 'Outcome';

interface ITypeButtonProps extends TouchableOpacityProps {
  label: ButtonType;
  isActive: boolean;
  type: ButtonType;
}

const shouldBeActive = (type: 'Income' | 'Outcome', isActive: boolean) => {
  if (type === 'Income' && isActive) {
    return [styles.container, styles.activeIncome];
  }
  if (type === 'Outcome' && isActive) {
    return [styles.container, styles.activeOutcome];
  }
  return [styles.container, styles.border];
};

const TypeButton = ({
  label,
  isActive = false,
  type,
  ...rest
}: ITypeButtonProps): JSX.Element => (
  <TouchableOpacity
    {...rest}
    style={shouldBeActive(type, isActive)}
    activeOpacity={0.8}
    isActive={isActive}
    type={type}
  >
    {type === 'Income' ? (
      <Feather
        name="arrow-up-circle"
        size={24}
        color={isActive ? theme.colors.shape : theme.colors.success}
      />
    ) : (
      <Feather
        name="arrow-down-circle"
        size={24}
        color={isActive ? theme.colors.shape : theme.colors.attention}
      />
    )}
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);
export default TypeButton;
