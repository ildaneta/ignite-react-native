import { StyleSheet } from 'react-native';
import theme from '../../../global/styles/theme';

export const styles = StyleSheet.create({
  containerInput: {
    backgroundColor: theme.colors.background_white_medium,
    width: '100%',
    height: 55,
    borderRadius: 5,
    alignSelf: 'center',
    paddingHorizontal: 16,
    borderColor: theme.colors.text,
    borderWidth: 1,
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.secondary
  },
})