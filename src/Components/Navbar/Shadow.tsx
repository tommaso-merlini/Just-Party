import { StyleSheet, Text, View } from "react-native";
import constants from "../../../constants";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export const Shadow = (props) => {
  const shadowHeight = props.height || 30;
  return (
    <View style={styles.header}>
      {props.children}
      <LinearGradient
        colors={[constants.colors.veryDarkBackground, "transparent"]}
        style={[styles.shadow, { height: shadowHeight }]}
      ></LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight,
    width: "100%",
    height: 100,
    alignItems: "center",
    backgroundColor: constants.colors.veryDarkBackground,
    zIndex: 999,
  },
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    color: constants.colors.words,
    fontSize: constants.fontSizes.biggest,
    fontWeight: "900",
  },
  shadow: {
    width: "100%",
  },
});
