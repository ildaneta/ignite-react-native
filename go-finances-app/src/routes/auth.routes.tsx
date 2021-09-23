import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import PublicRoute from "../routes/public.routes";

const AuthRoutes = (): JSX.Element => {
  return (
    <NavigationContainer>
      <PublicRoute />
    </NavigationContainer>
  );
};

export default AuthRoutes;
