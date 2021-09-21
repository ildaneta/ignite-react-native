import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 24,
    paddingBottom: 30
  },

  chartContainer: {
    width: '100%',
    alignItems: 'center'
  },

  monthSelected: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 25
  },

  monthSelectButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  monthText: {
    fontSize: 20,
    fontFamily: theme.fonts.regular,
    color: theme.colors.shape
  }
}) 