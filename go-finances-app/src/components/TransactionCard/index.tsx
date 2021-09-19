import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import theme from "../../global/styles/theme";

import { styles } from "./styles";

interface Category {
  name: string;
  icon: string;
}

export interface ITransactionProps {
  type: "Income" | "Outcome";
  name: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  data: ITransactionProps;
}

const TransactionCard = ({ data }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.expenseTitle}>{data.name}</Text>

      {data.type === "Income" ? (
        <Text style={[styles.expenseValue, { color: theme.colors.success }]}>
          {data.amount}
        </Text>
      ) : (
        <Text style={[styles.expenseValue, { color: theme.colors.attention }]}>
          - {data.amount}
        </Text>
      )}

      <View style={styles.containerExpenses}>
        <View style={styles.containerExpensesType}>
          <FontAwesome
            name={data.category.icon}
            color={theme.colors.textGrayDarker}
            size={18}
            style={styles.icon}
          />
          <Text style={styles.textDescriptionExpense}>
            {data.category.name}
          </Text>
        </View>

        <View>
          <Text style={styles.textDescriptionExpense}>{data.date}</Text>
        </View>
      </View>
    </View>
  );
};

export default TransactionCard;
