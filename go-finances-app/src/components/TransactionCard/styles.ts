import { StyleSheet } from 'react-native'
import theme from '../../global/styles/theme'

export const styles = StyleSheet.create({
container: {
  backgroundColor: theme.colors.background_light,
  width: '100%',
  paddingVertical: 20,
  paddingHorizontal: 20,
  borderRadius: 5,
  marginBottom: 16
},


expenseTitle: {
  fontFamily: theme.fonts.regular,
  fontSize: 14,
  color: theme.colors.shape,
  marginBottom: 10
},

expenseValue: {
  fontFamily: theme.fonts.medium,
  fontSize: 20,
},

containerExpenses: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 12,
  alignItems: 'center'
}, 

containerExpensesType: {
  flexDirection: 'row',
},

icon: {
  marginRight: 17
},

textDescriptionExpense: {
  fontFamily: theme.fonts.regular,
  fontSize: 14,
  color: theme.colors.textGrayDarker
}
})