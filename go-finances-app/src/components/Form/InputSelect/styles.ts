import { StyleSheet } from 'react-native';
import theme from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  containerInput: {
    backgroundColor: theme.colors.background_gray,
    width: '100%',
    height: 55,
    borderRadius: 5,
    paddingHorizontal: 16,
    borderColor: theme.colors.text,
    borderWidth: 1,
    color: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  
  text: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.textMediumGray
  },

  button: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
})