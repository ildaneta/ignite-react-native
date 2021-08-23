import {StyleSheet} from 'react-native'
import theme from '../../global/styles/theme'

export const styles = StyleSheet.create({
container: {
  backgroundColor: theme.colors.background_light,
  width: 327,
  height: 128,
  padding: 24,
  borderRadius: 5,
  marginBottom: 16
},


expenseTitle: {
  fontFamily: theme.fonts.regular,
  fontSize: 14,
  color: theme.colors.shape,
  lineHeight: 21
},

expenseValue: {
  fontFamily: theme.fonts.medium,
  fontSize: 20,
},

containerExpenses: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 18,
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