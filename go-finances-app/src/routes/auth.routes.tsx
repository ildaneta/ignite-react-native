import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LogIn from "../pages/LogIn";

const { Navigator, Screen } = createNativeStackNavigator();

const routes = (): JSX.Element => {
  return (
    <Navigator>
      <Screen
        name="LogIn"
        component={LogIn}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default routes;
