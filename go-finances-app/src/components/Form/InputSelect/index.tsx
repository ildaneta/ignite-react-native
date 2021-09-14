import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import theme from "../../../global/styles/theme";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

interface InputSelectProps extends TouchableOpacityProps {
  categoryTitle: string;
}

const InputSelect = ({
  categoryTitle,
  ...rest
}: InputSelectProps): JSX.Element => {
  return (
    <TouchableOpacity
      style={styles.containerInput}
      {...rest}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{categoryTitle}</Text>
      <Feather name="chevron-down" color={theme.colors.primary} size={20} />
    </TouchableOpacity>
  );
};

export default InputSelect;
