import React from "react";
import { View, Text } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import theme from "../../global/styles/theme";

import { styles } from "./styles";

interface IHighlightCard {
  title: string;
  amount: string;
  lastTransaction: string;
  type: "up" | "down" | "total";
}

const typeIcon = (transactionType: string) => {
  if (transactionType === "up") {
    return (
      <Ionicons
        name="arrow-up-circle-outline"
        color={theme.colors.success}
        size={34}
      />
    );
  } else if (transactionType === "down") {
    return (
      <Ionicons
        name="arrow-down-circle-outline"
        color={theme.colors.attention}
        size={34}
      />
    );
  } else {
    return (
      <Feather name="dollar-sign" color={theme.colors.text_gray} size={34} />
    );
  }
};

const HighlightCard = ({
  title,
  amount,
  lastTransaction,
  type,
}: IHighlightCard): JSX.Element => {
  return (
    <View
      style={
        type === "total"
          ? [styles.container, { backgroundColor: theme.colors.highLight }]
          : [styles.container, { backgroundColor: theme.colors.primary }]
      }
    >
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>

        {typeIcon(type)}
      </View>

      <View style={styles.containerValue}>
        <Text style={styles.value}>{amount}</Text>

        <Text style={styles.description}>{lastTransaction}</Text>
      </View>
    </View>
  );
};

export default HighlightCard;
