import { StyleSheet, Text, View, TextInput } from "react-native";
import constants from "../../../constants";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import { GlassyBox } from "../../Components/GlassyBox/GlassyBox";
import { useState } from "react";
import { Button } from "../../Components/Button/Button";
import { Footer } from "../../Components/Footer/Footer";

export const Step2 = () => {
  const [text, setText] = useState(null);
  const handleChangeText = (input) => {
    setText(input);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Eta'"
        placeholderTextColor="#7e7e7e"
        selectionColor={"#7e7e7e"}
        onChangeText={handleChangeText}
        value={text}
        keyboardType={"number-pad"}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Username Instagram"
        placeholderTextColor="#7e7e7e"
        selectionColor={"#7e7e7e"}
        onChangeText={handleChangeText}
        value={text}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    backgroundColor: constants.colors.lightDark,
    borderRadius: 20,
    padding: constants.spacing.standard,
    color: constants.colors.words,
    fontWeight: "700",
    marginBottom: constants.spacing.standard + 5,
  },
});
