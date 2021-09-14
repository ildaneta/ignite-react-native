import { StyleSheet } from 'react-native'
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
    alignItems:'center'
  },

  containerUser: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  userImage: {
    width: 48,
    height: 48,
    marginRight: 18,
    borderRadius: 5
  },

  greetings: {
    fontSize: 18,
    fontFamily: theme.fonts.regular,
    color: theme.colors.textWhite
  },

  userName: {
    fontSize: 18,
    fontFamily: theme.fonts.bold,
    color: theme.colors.textWhite
  },

  logoff: {
    flexDirection: 'row',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
});