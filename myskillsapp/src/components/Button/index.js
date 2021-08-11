import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {styles} from './styles';

const Button = ({onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};

export default Button;
