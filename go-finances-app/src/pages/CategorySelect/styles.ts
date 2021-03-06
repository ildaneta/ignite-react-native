import { StyleSheet, Platform } from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  containerButton: {
    marginBottom: Platform.OS === 'android' ? 20 : 0,
    marginHorizontal: 12
  },

  headerText: {
    color: theme.colors.shape,
    fontSize: 16,
    fontFamily: theme.fonts.medium,
    alignSelf: 'center',
    marginVertical: 20,
  }
})