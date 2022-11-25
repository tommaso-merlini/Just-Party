import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./Stacks/HomeStack";
import Ionicons from "react-native-vector-icons/Ionicons";
import constants from "../../constants";
import { StyleSheet, View } from "react-native";
import Image from "react-native-remote-svg";
import SearchStack from "./Stacks/SearchStack";
import JoinedPartiesStack from "./Stacks/JoinedPartiesStack";
import { PostCamera } from "../Screens/PostCamera";
import { ReactionCamera } from "../Screens/ReactionCamera";
import AuthStack from "./Stacks/AuthStack";

//stacks and screen
const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },

          tabBarStyle: {
            height: 80,
            backgroundColor: constants.colors.veryDarkBackground,
            borderTopWidth: 0,
            position: "absolute",
            bottom: constants.spacing.standard,
            left: constants.spacing.standard,
            right: constants.spacing.standard,
            borderRadius: 20,
          },
        })}
      >
        <Tab.Screen
          name="Auth"
          component={AuthStack}
          options={{
            tabBarStyle: { display: "none" },
            header: () => null,
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            header: () => null,
            tabBarIcon: ({ focused }) => {
              // You can return any component that you like here!
              return (
                <Image
                  source={
                    focused
                      ? require("../../Icons/balloons-fill.svg")
                      : require("../../Icons/balloons.svg")
                  }
                  style={styles.icon}
                ></Image>
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={{
            header: () => null,
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? "search" : "search-outline"}
                  size={40}
                  color={constants.colors.words}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="JoinedParties"
          component={JoinedPartiesStack}
          options={{
            header: () => null,
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={
                    focused
                      ? require("../../Icons/tickets-fill.svg")
                      : require("../../Icons/tickets.svg")
                  }
                  style={styles.icon}
                ></Image>
              );
            },
          }}
        />
        <Tab.Screen
          name="PostCamera"
          component={PostCamera}
          options={{
            tabBarStyle: { display: "none" },
            header: () => null,
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="ReactionCamera"
          component={ReactionCamera}
          options={{
            tabBarStyle: { display: "none" },
            header: () => null,
            tabBarButton: () => null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
  },
});
