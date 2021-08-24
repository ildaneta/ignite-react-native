import { StyleSheet } from 'react-native';
import theme from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.secondary,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },

  buttonText: {
    color: theme.colors.textGray,
    fontFamily: theme.fonts.medium,
    fontSize: 15
  }
})