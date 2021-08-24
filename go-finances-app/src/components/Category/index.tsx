import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import theme from '../../global/styles/theme';

import { styles } from './styles';

interface ICategoryProps extends TouchableOpacityProps {
  categoryName: string;
  iconName: string;
}

const Category = ({
  categoryName,
  iconName,
  ...rest
}: ICategoryProps): JSX.Element => {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <FontAwesome
        name={iconName}
        size={20}
        color={theme.colors.secondary}
        style={styles.icon}
      />
      <Text style={styles.text}>{categoryName}</Text>
    </TouchableOpacity>
  );
};

export default Category;
