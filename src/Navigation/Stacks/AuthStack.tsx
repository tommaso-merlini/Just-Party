import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Feed from "../../Screens/Feed";
import { Notifications } from "../../Screens/Notifications";
import { User } from "../../Screens/User";
import { Step1 } from "../../Screens/SignUp/Step1";
import { SignUp } from "../../Screens/SignUp/SignUp";

//screens
// import Company from "../../screens/Company/Company";
// import Product from "../../screens/Product/Product";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          header: () => null,
        }}
      />
      {/*
      <Stack.Screen
        name="Product"
        component={Product}
        options={{ header: () => null }}
      /> */}
    </Stack.Navigator>
  );
}
