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
  }
}) 