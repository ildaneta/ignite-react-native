
import {Platform, StyleSheet} from 'react-native'
import theme from '../../global/styles/theme';


export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    paddingTop: Platform.OS === 'ios' ? 66 : 26,
    paddingHorizontal: 24,
    paddingBottom: 30
  },

  title: {
    fontFamily: theme.fonts.regular,
    fontSize: 18,
    color: theme.colors.textWhite,
    marginBottom: 16,
    marginTop: 32
  }
})

