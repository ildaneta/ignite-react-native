import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: theme.colors.background_white_medium,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 24,
    borderColor: theme.colors.secondary,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'space-between'
  },

  text: {
    marginLeft: 20,
    fontSize: 14,
    fontFamily: theme.fonts.regular,
  },

  icon: {
    width: 26,
    textAlign: 'center'
  }, 

  containerIconName: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})