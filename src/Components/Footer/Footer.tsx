import { StyleSheet, Text, View, TextInput } from "react-native";

export const Footer = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.text}>Termini e Condizioni</Text>
      <Text style={styles.text}>Copyright © 2022</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#7e7e7e",
    fontWeight: "800",
  },
});
