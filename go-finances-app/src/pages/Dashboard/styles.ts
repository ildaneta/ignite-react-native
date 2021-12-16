
import { StyleSheet } from 'react-native'
import theme from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    paddingTop: 20,
    paddingHorizontal: 24,
  },

  title: {
    fontFamily: theme.fonts.regular,
    fontSize: 18,
    color: theme.colors.text_white,
    marginBottom: 16,
    marginTop: 16
  },
})

