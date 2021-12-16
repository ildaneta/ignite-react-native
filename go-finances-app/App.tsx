import "react-native-gesture-handler";
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import React from "react";
import { LogBox, SafeAreaView, StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

import { AuthProvider } from "./src/context/AuthContext";

import Routes from "./src/routes";

import theme from "./src/global/styles/theme";

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
      <StatusBar barStyle="light-content" translucent={true} />

      <ThemeProvider theme={theme}>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: theme.colors.secondary,
          }}
        >
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </SafeAreaView>
      </ThemeProvider>
    </>
  );
}
