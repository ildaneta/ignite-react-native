 import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';
 
 export const styles = StyleSheet.create({
   container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background_gray_lightner,
    width: '100%',
    height: 56,
    borderRadius: 5,
    marginBottom: 16
   },

   containerIcon: { 
    width: 56,
    height: 56,
    borderRightWidth: 1,
    borderRightColor: theme.colors.text,
    alignItems: 'center',
    justifyContent: 'center',

   },

   text: {
     marginLeft: '22%',
     fontFamily: theme.fonts.medium,
     fontSize: 15
   }
 }) 