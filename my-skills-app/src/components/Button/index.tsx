import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';

import {styles} from './styles';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button = ({title, ...rest}: IButtonProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.5} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
