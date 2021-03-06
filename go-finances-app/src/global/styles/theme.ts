export type ThemeType = typeof theme

export const theme = {
  colors: {
    primary: '#121015',
    secondary: '#050505',
    success: '#12A454',
    success_light: 'rgba(18, 164,84, 0.5)',
    attention: '#e83f5b',
    attention_light: '#a32f40',
    shape: '#f1f1f1',
    text_gray: '#ccc9c9',
    text_gray_darker: '#afaeae',
    text_white: '#f1f1f1',
    text: '#111',
    background: '#1e1e21',
    background_header: '#202023',
    background_light: '#3a3a3a',
    background_gray: '#777',
    background_gray_light: '#999',
    background_white_medium: '#ededed',
    background_gray_lightner: '#E8E5E5',
    highLight: '#765A74',
    highLight_menu: '#D46A92',
  },

  fonts: {
    regular: 'Poppins_400Regular',
    medium: 'Poppins_500Medium',
    bold: 'Poppins_700Bold'
  }
}

export default theme