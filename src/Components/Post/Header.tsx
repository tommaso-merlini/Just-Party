import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import constants from "../../../constants";
import { useNavigation } from "@react-navigation/native";

export const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <TouchableOpacity onPress={() => navigation.navigate("User")}>
          <View style={styles.profilePicture}></View>
        </TouchableOpacity>
        <View style={styles.details}>
          <TouchableOpacity onPress={() => navigation.navigate("User")}>
            <Text style={styles.userName}>Tommaso Merlini</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.party, { color: "#7e7e7e" }]}>Party di </Text>
            <TouchableOpacity onPress={() => navigation.navigate("User")}>
              <Text style={[styles.party, { color: constants.colors.purple }]}>
                Pippo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ paddingRight: constants.spacing.standard / 2 }}>
        <Text style={[styles.party, { color: "#7e7e7e" }]}>Pre-Party</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSide: {
    flexDirection: "row",
  },
  profilePicture: {
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: constants.colors.veryVeryLightDark,
  },
  details: {
    paddingLeft: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
    color: constants.colors.words,
  },
  party: {
    fontSize: 14,
    fontWeight: "500",
  },
});
