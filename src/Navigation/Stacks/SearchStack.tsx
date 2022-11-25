import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Explorer } from "../../Screens/Explorer";
import { Notifications } from "../../Screens/Notifications";
import { User } from "../../Screens/User";

//screens
// import Company from "../../screens/Company/Company";
// import Product from "../../screens/Product/Product";

const Stack = createStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="Explorer"
        component={Explorer}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{
          title: "Notifiche",
          header: () => null,
        }}
      />
      <Stack.Screen
        name="User"
        component={User}
        options={{
          title: " nome Utente", //TODO mettere il nome utente vero
          header: () => null,
        }}
        // options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}
