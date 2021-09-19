import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

interface IHistoryCardProps {
  color: string;
  title: string;
  amount: string;
}

const HistoryCard = ({
  color,
  title,
  amount,
}: IHistoryCardProps): JSX.Element => {
  return (
    <View style={[styles.container, { borderLeftColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
};

export default HistoryCard;
