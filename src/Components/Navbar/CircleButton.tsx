import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import constants from "../../../constants";

export const CircleButton = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: "#2e2e2e",
    justifyContent: "center",
    alignItems: "center",
  },
});
