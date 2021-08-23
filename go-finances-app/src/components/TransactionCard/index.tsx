import React from 'react';
import { View, Text, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import theme from '../../global/styles/theme';

import { styles } from './styles';

interface Category {
  name: string;
  icon: string;
}

export interface ITransactionCardProps {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  data: ITransactionCardProps;
}

const TransactionCard = ({ data }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.expenseTitle}>{data.title}</Text>

      {data.type === 'positive' ? (
        <Text style={[styles.expenseValue, { color: theme.colors.success }]}>
          R$ {data.amount}
        </Text>
      ) : (
        <Text style={[styles.expenseValue, { color: theme.colors.attention }]}>
          - R$ {data.amount}
        </Text>
      )}

      <View style={styles.containerExpenses}>
        <View style={styles.containerExpensesType}>
          <FontAwesome5
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
