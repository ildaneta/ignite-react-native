import { StyleSheet } from 'react-native';
import theme from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 164,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  border: {
    borderColor: theme.colors.secondary,
    borderWidth: 1,
  },

  text: {
    marginLeft: 24,
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.shape
  },

  activeIncome: {
    backgroundColor: theme.colors.success_light
  },

  activeOutcome: {
    backgroundColor: theme.colors.attention_light
  }
})