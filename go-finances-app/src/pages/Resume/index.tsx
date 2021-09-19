import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HistoryCard from "../../components/HistoryCard";

import { styles } from "./styles";
import { ITransactionProps } from "../../components/TransactionCard";
import { categories } from "../../utils/categories";

interface ITotalCategoryExpensiveProps {
  name: string;
  total: string;
  color: string;
}

const Resume = (): JSX.Element => {
  const [dataExpensives, setDataExpensives] = useState<
    ITotalCategoryExpensiveProps[]
  >([]);

  const loadData = async () => {
    const transactionsKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(transactionsKey);

    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter(
      (transactions: ITransactionProps) => transactions.type === "Outcome"
    );

    const totalCategoryExpensive: ITotalCategoryExpensiveProps[] = [];

    categories.forEach((category) => {
      let categorySum = 0;

      expensives.forEach((expensive: ITransactionProps) => {
        if (expensive.category.name === category.name) {
          categorySum += Number(expensive.amount);
        }
      });

      if (categorySum > 0) {
        totalCategoryExpensive.push({
          name: category.name,
          color: category.color,
          total: categorySum.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }),
        });
      }
    });

    setDataExpensives(totalCategoryExpensive);
  };

  useEffect(() => {
    loadData();
  }, [dataExpensives]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {dataExpensives.map((item) => (
          <HistoryCard
            color={item.color}
            title={item.name}
            amount={item.total}
            key={item.name}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Resume;
