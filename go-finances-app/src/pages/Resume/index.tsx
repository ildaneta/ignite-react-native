import React, { useCallback, useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { VictoryPie } from "victory-native";
import { MaterialIcons } from "@expo/vector-icons";
import { addMonths, subMonths, format } from "date-fns";
import { useFocusEffect } from "@react-navigation/core";

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

  const [summaryDate, setSummaryDate] = useState(new Date());

  const handleChangeDate = (action: "next" | "prev") => {
    if (action === "next") {
      const newDate = addMonths(summaryDate, 1);
      setSummaryDate(newDate);
    } else {
      const newDate = subMonths(summaryDate, 1);
      setSummaryDate(newDate);
    }
  };

  const loadData = async () => {
    const transactionsKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(transactionsKey);

    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter(
      (expensiveTransaction: ITransactionProps) =>
        expensiveTransaction.type === "Outcome" &&
        new Date(expensiveTransaction.date).getMonth() ===
          summaryDate.getMonth() &&
        new Date(expensiveTransaction.date).getFullYear() ===
          summaryDate.getFullYear()
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

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [dataExpensives])
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.chartContainer}>
          <View style={styles.monthSelected}>
            <TouchableOpacity
              style={styles.monthSelectButton}
              onPress={() => handleChangeDate("prev")}
            >
              <MaterialIcons
                name="keyboard-arrow-left"
                color={theme.colors.shape}
                size={25}
              />
            </TouchableOpacity>

            <Text style={styles.monthText}>
              {format(summaryDate, "MMMM, yyyy")}
            </Text>

            <TouchableOpacity
              style={styles.monthSelectButton}
              onPress={() => handleChangeDate("next")}
            >
              <MaterialIcons
                name="keyboard-arrow-right"
                color={theme.colors.shape}
                size={25}
              />
            </TouchableOpacity>
          </View>

          <VictoryPie
            data={dataExpensives}
            x="percent"
            y="totalChart"
            colorScale={dataExpensives.map((category) => category.color)}
            style={{
              labels: {
                fontSize: 15,
                fontWeight: "bold",
                fill: theme.colors.text_gray,
              },
            }}
            width={320}
            height={320}
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
