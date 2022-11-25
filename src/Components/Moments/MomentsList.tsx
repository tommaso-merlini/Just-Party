import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import constants from "../../../constants";
import { Moment } from "./Moment";

export const MomentsList = () => {
  return (
    <ScrollView horizontal={true} style={styles.container}>
      <Moment />
      <Moment />
      <Moment />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    // width: Dimensions.get("window").width + constants.spacing.standard,
    paddingHorizontal: constants.spacing.standard,
  },
  title: {
    color: constants.colors.words,
    fontWeight: "900",
    fontSize: 25,
  },
});
