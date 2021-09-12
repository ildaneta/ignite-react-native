import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import theme from "../../global/styles/theme";

import { styles } from "./styles";

interface ICategoryProps extends TouchableOpacityProps {
  categoryName: string;
  iconName: string;
  isActive: boolean;
}

const Category = ({
  categoryName,
  iconName,
  isActive,
  ...rest
}: ICategoryProps): JSX.Element => {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <View style={styles.containerIconName}>
        <FontAwesome
          name={iconName}
          size={20}
          color={theme.colors.secondary}
          style={styles.icon}
        />
        <Text style={styles.text}>{categoryName}</Text>
      </View>

      {isActive && (
        <Feather name="check" color={theme.colors.primary} size={20} />
      )}
    </TouchableOpacity>
  );
};

export default Category;
