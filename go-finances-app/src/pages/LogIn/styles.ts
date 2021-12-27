import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:  theme.colors.background
  },

  title: {
    marginTop: 10,
    marginBottom: 30,
    fontFamily: theme.fonts.medium,
    fontSize: 18,
    color: theme.colors.highLight_menu,

  },

  description: {
    width: 290,
    fontFamily: theme.fonts.medium,
    fontSize: 28,
    textAlign: 'center',
    color: theme.colors.shape,
    marginBottom: 60
  },

  textLogin: {
    width: 169,
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    textAlign: 'center',
    color: theme.colors.shape,
    marginBottom: 40
  }

}) 