import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    height: '100%',
    paddingVertical: 10
  },

  form: {
    marginTop: 24,
    marginBottom: 16,
    marginHorizontal: 24
  },

  divider: {
    marginBottom: 8
  },

  containerButton: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginBottom: 24,
    flex: 1,
    alignItems: 'flex-end',
  },

  containerTypeButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginBottom: 16
  },

  containerInputSelect: {
    marginHorizontal: 24,
  }
})