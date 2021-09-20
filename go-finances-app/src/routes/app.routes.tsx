import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

import theme from "../global/styles/theme";

const Tab = createBottomTabNavigator();

import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Resume from "../pages/Resume";

const routes = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.highLightMenu,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          height: 80,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: theme.fonts.medium,
        },
        tabBarBackground: () => (
          <View style={{ backgroundColor: "#202023", flex: 1 }} />
        ),
      }}
    >
      <Tab.Screen
        name="Listing"
        component={Dashboard}
        options={{
          headerTitleAlign: "center",
          headerBackgroundContainerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Register an Input or Output",
          headerStyle: {
            backgroundColor: theme.colors.secondary,
          },
          headerTintColor: theme.colors.shape,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="pencil-square-o" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Summary"
        component={Resume}
        options={{
          headerTitleAlign: "center",
          headerTitle: "Expense Summary",
          headerStyle: {
            backgroundColor: theme.colors.secondary,
          },
          headerTintColor: theme.colors.shape,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="pie-chart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default routes;
