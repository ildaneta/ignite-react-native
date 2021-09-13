import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HighlightCard from "../../components/HighlightCard";
import Header from "../../components/Header";
import TransactionCard from "../../components/TransactionCard";

import { styles } from "./styles";

import { ITransactionCardProps } from "../../components/TransactionCard";
interface DataListProps extends ITransactionCardProps {
  id: string;
}

const Dashboard = (): JSX.Element => {
  const [data, setData] = useState<DataListProps[]>([]);

  const loadData = async () => {
    const transactionsKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(transactionsKey);

    const allTransactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: DataListProps[] = allTransactions.map(
      (item: DataListProps) => {
        const amount = Number(item.amount).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const date = Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          category: item.category,
          type: item.type,
          amount: amount,
          date: date,
        };
      }
    );
    console.log(allTransactions);

    setData(transactionsFormatted);
  };

  useEffect(() => {
    loadData();
  }, [data]);

  return (
    <ScrollView style={styles.container}>
      <Header onPress={() => {}} />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <HighlightCard
          title="Receipts"
          amount="17.420,00"
          lastTransaction="April 13th"
          type="up"
        />
        <HighlightCard
          title="Outflows"
          amount="1.259,00"
          lastTransaction="April 3th"
          type="down"
        />
        <HighlightCard
          title="Total"
          amount="16.141,50"
          lastTransaction="April from 1th to 16th"
          type="total"
        />
      </ScrollView>

      <Text style={styles.title}>Listing</Text>

      <FlatList
        style={{ flex: 0 }}
        initialNumToRender={data.length}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginBottom: 40 }}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionCard data={item} />}
      />

      <View style={{ height: 20, marginBottom: 20 }} />
    </ScrollView>
  );
};

export default Dashboard;
