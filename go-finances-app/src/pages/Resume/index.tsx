import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { VictoryPie } from "victory-native";

import HistoryCard from "../../components/HistoryCard";

import { styles } from "./styles";
import { ITransactionProps } from "../../components/TransactionCard";
import { categories } from "../../utils/categories";
import theme from "../../global/styles/theme";

interface ITotalCategoryExpensiveProps {
  name: string;
  total: string;
  totalChart: number;
  color: string;
  percent: string;
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

    const expensivesTotalValue = expensives.reduce(
      (acumullator: number, expensiveItem: ITransactionProps) => {
        return acumullator + Number(expensiveItem.amount);
      },
      0
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
        const percent = `${((categorySum / expensivesTotalValue) * 100).toFixed(
          0
        )}%`;

        totalCategoryExpensive.push({
          name: category.name,
          color: category.color,
          total: categorySum.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          }),
          totalChart: categorySum,
          percent,
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.chartContainer}>
          <VictoryPie
            data={dataExpensives}
            x="percent"
            y="totalChart"
            colorScale={dataExpensives.map((category) => category.color)}
            style={{
              labels: {
                fontSize: 15,
                fontWeight: "bold",
                fill: theme.colors.textGray,
              },
            }}
            width={350}
            height={350}
          />
        </View>

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
