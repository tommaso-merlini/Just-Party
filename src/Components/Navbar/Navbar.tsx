import { StyleSheet, Text, View } from "react-native";
import constants from "../../../constants";
import Constants from "expo-constants";
import { CircleButton } from "./CircleButton";
import { LinearGradient } from "expo-linear-gradient";
import { Shadow } from "./Shadow";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Navbar = ({ navigation }) => {
  return (
    <Shadow>
      <View style={styles.container}>
        <CircleButton onPress={() => navigation.navigate("Notifications")}>
          <Ionicons
            name={"notifications"}
            size={22}
            color={constants.colors.words}
          />
        </CircleButton>
        <Text style={styles.title}>JustParty</Text>
        <CircleButton onPress={() => navigation.navigate("User")}>
          <Ionicons name={"person"} size={22} color={constants.colors.words} />
        </CircleButton>
      </View>
    </Shadow>
  );
};

const styles = StyleSheet.create({
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
});
