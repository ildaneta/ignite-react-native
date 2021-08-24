import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: theme.colors.background_gray_light,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    // justifyContent: 'flex-start',
    paddingLeft: 24,
    borderColor: theme.colors.secondary,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },

  text: {
    marginLeft: 20,
    fontSize: 14,
    fontFamily: theme.fonts.regular,
  },

  icon: {
    width: 26,
    textAlign: 'center'
  }
})