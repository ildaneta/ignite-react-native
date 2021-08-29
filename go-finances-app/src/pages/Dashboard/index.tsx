import React from 'react';
import { ScrollView, View, Text, FlatList, StatusBar } from 'react-native';

import HighlightCard from '../../components/HighlightCard';
import Header from '../../components/Header';
import TransactionCard from '../../components/TransactionCard';

import { styles } from './styles';

import { ITransactionCardProps } from '../../components/TransactionCard';
import theme from '../../global/styles/theme';

interface DataListProps extends ITransactionCardProps {
  id: string;
}

const Dashboard = (): JSX.Element => {
  const data: DataListProps[] = [
    {
      id: '1',
      title: 'Website development',
      amount: '12.000,00',
      category: {
        name: 'Work',
        icon: 'dollar-sign',
      },
      date: '14/04/2021',
      type: 'positive',
    },

    {
      id: '2',
      title: 'iFood',
      amount: '120,00',
      category: {
        name: 'Food',
        icon: 'dollar-sign',
      },
      date: '14/04/2021',
      type: 'negative',
    },
    {
      id: '3',
      title: 'Zara',
      amount: '346,50',
      category: {
        name: 'Clothes',
        icon: 'store-alt',
      },
      date: '14/04/2021',
      type: 'negative',
    },
  ];

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.secondary}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Header />

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
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ marginBottom: 40 }}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />

        <View style={{ height: 20, marginBottom: 20 }} />
      </ScrollView>
    </>
  );
};

export default Dashboard;
