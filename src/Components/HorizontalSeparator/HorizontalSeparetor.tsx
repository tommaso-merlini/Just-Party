import { StyleSheet, View, Text } from "react-native";
import constants from "../../../constants";

export const HorizontalSeparator = ({ word }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.separator} />
      <Text
        style={{
          alignSelf: "center",
          marginBottom: constants.spacing.standard,
          paddingHorizontal: constants.spacing.standard,
          fontSize: 18,
          color: "#7e7e7e",
          fontWeight: "800",
        }}
      >
        {word}
      </Text>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 2,
    flex: 1,
    alignSelf: "center",
    borderColor: "#7e7e7e",
    borderTopWidth: 1,
    borderStyle: "dashed",
    marginBottom: 10,
  },
});
