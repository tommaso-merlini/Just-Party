import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import constants from "../../constants";
import { Shadow } from "../Components/Navbar/Shadow";
import Ionicons from "react-native-vector-icons/Ionicons";
import { GlassyBox } from "../Components/GlassyBox/GlassyBox";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ScrollView } from "react-native-gesture-handler";

export const Notifications = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Shadow>
        <View style={styles.header}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={navigation.goBack} style={styles.goBack}>
              <Ionicons
                name={"arrow-back"}
                size={25}
                color={constants.colors.words}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Notifiche</Text>
          </View>
        </View>
      </Shadow>
      <ScrollView style={{ padding: constants.spacing.standard }}>
        <GlassyBox>
          <View style={styles.notification}>
            <View
              style={{ flexDirection: "row", width: "60%", flexWrap: "wrap" }}
            >
              <Text style={[styles.text, { color: constants.colors.words }]}>
                E' l'ora del{" "}
              </Text>
              <Text style={[styles.text, { color: constants.colors.purple }]}>
                Pre-Party
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Text style={styles.date}>10/10/22 9:50</Text>
            </View>
          </View>
        </GlassyBox>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.colors.background,
  },
  header: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    paddingLeft: constants.spacing.standard + 5,
    // backgroundColor: "blue",
  },
  goBack: {
    // backgroundColor: "red",
    padding: 5,
  },
  title: {
    color: constants.colors.words,
    fontSize: 22,
    marginLeft: constants.spacing.standard / 2,
    marginTop: 3,
    fontWeight: "900",
    // backgroundColor: "red",
  },
  notification: {
    flexDirection: "row",
    padding: constants.spacing.standard,
    justifyContent: "space-evenly",
  },
  text: {
    fontWeight: "900",
    fontSize: 22,
  },
  date: {
    fontSize: 12,
    fontWeight: "900",
    color: "#7e7e7e",
    margin: 0,
  },
});
