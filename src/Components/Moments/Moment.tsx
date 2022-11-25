import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import constants from "../../../constants";
import { GlassyBox } from "../GlassyBox/GlassyBox";

export const Moment = () => {
  return (
    <TouchableOpacity style={styles.moment}>
      <GlassyBox>
        <View style={styles.header}>
          <View
            style={{
              flexDirection: "row",
              paddingLeft: constants.spacing.standard / 2,
            }}
          >
            <Text style={[styles.party, { color: "#7e7e7e" }]}>Party di </Text>
            <Text style={[styles.party, { color: constants.colors.purple }]}>
              Pippo
            </Text>
          </View>
          <View style={{ paddingRight: constants.spacing.standard / 2 }}>
            <Text style={[styles.party, { color: "#7e7e7e" }]}>Pre-Party</Text>
          </View>
        </View>
        <View style={styles.image}></View>
      </GlassyBox>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  moment: {
    marginRight: constants.spacing.standard,
  },
  title: {
    color: constants.colors.words,
    fontWeight: "900",
    fontSize: 25,
  },

  image: {
    width: 200,
    height: 200,
    marginTop: constants.spacing.standard,
    backgroundColor: constants.colors.veryVeryLightDark,
    borderRadius: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  party: {
    fontSize: 14,
    fontWeight: "500",
  },
});
