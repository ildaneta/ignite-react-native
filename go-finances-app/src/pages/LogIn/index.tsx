import React, { useState, useContext } from "react";
import { View, Text, Platform, Alert, ActivityIndicator } from "react-native";

import AppleIcon from "../../assets/apple-icon.svg";
import GoogleIcon from "../../assets/google-icon.svg";
import GoFinancesIcon from "../../assets/finance-icon.svg";

import ButtonIcon from "../../components/ButtonIcon";

import { styles } from "./styles";
import { useAuthContext } from "../../context/AuthContext";

const LogIn = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle, signInWithApple } = useAuthContext();

  const handleSignInWithGoogle = async () => {
    try {
      setIsLoading(true);
      return await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar a sua conta Google!");
      setIsLoading(false);
    }
  };

  const handleSignInWithApple = async () => {
    try {
      setIsLoading(true);
      return await signInWithApple();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar a sua conta Apple!");
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <GoFinancesIcon />
      <Text style={styles.title}>GoFinances</Text>

      <Text numberOfLines={3} style={styles.description}>
        A very simple control for your Personal Finances
      </Text>

      <Text numberOfLines={2} style={styles.textLogin}>
        Login with one of the accounts below
      </Text>

      <ButtonIcon
        label="LogIn with Google"
        icon={<GoogleIcon />}
        onPress={handleSignInWithGoogle}
      />

      {Platform.OS === "ios" && (
        <ButtonIcon
          label="LogIn with Apple"
          icon={<AppleIcon />}
          onPress={handleSignInWithApple}
        />
      )}

      {isLoading && <ActivityIndicator />}
    </View>
  );
};

export default LogIn;
