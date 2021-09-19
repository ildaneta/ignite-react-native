import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.background_light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 13,
    paddingHorizontal: 24,
    borderRadius: 5,
    borderLeftWidth: 5,
    alignItems: 'center',
    marginBottom: 8
  },

  title: {
    color: theme.colors.background_white_medium,
    fontFamily: theme.fonts.regular,
    fontSize: 15
  },

  amount: {
    color: theme.colors.shape,
    fontFamily: theme.fonts.bold,
    fontSize: 15,
  }
}) 