import {StyleSheet}  from 'react-native'
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
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.textWhite
  },

  containerValue: {
    marginTop: 38,
    paddingHorizontal: 23
  },

  value: {
    fontFamily: theme.fonts.bold,
    fontSize: 32,
    color: theme.colors.textWhite
  },

  description: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.textGray
  }
})