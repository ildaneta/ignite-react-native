import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

import Dashboard from './src/pages/Dashboard';
import Register from './src/pages/Register';
import CategorySelect from './src/pages/CategorySelect';

import theme from './src/global/styles/theme';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead. at node_modules/react-native/Libraries/Lists/VirtualizedList.js:1195:14 in ScrollView.Context.Consumer.props.children at node_modules/@expo-google-fonts/poppins/useFonts.js:21:27 in loadAsync.then$argument_0'
])

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />

      <ThemeProvider theme={theme}>
        <Register />
      </ThemeProvider>
    </>
  );
}
