import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import constants from "../../../constants";

export const GlassyBox = (props) => {
  return (
    <BlurView
      intensity={40}
      style={{ borderRadius: styles.container.borderRadius, marginBottom: 30 }}
    >
      <LinearGradient
        colors={["#3E3E3E", "#313131"]}
        locations={[0.2, 0.8]}
        style={styles.container}
      >
        {props.children}
      </LinearGradient>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 30,
    borderColor: constants.colors.veryVeryLightDark,
    borderWidth: 1,
    padding: constants.spacing.standard,
  },
});
