import { StyleSheet }  from 'react-native'
import theme from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    height: 200,
    borderRadius: 5,
    width: 300,
    marginRight: 16,
  },


  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 23,
    paddingTop: 23
  },

  headerTitle: {
    fontFamily: theme.fonts.medium,
    fontSize: 15,
    color: theme.colors.text_gray
  },

  containerValue: {
    marginTop: 38,
    paddingHorizontal: 23
  },

  value: {
    fontFamily: theme.fonts.bold,
    fontSize: 32,
    color: theme.colors.text_gray
  },

  description: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    color: theme.colors.text_gray
  }
})