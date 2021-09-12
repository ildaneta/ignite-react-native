import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

import { styles } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

const Button = ({ label, ...rest }: ButtonProps): JSX.Element => {
  const { style } = { ...rest };

  return (
    <TouchableOpacity
      {...rest}
      style={[styles.container, style]}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
