import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { useAuthContext } from "../context/AuthContext";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes = (): JSX.Element => {
  const { user } = useAuthContext();

  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
