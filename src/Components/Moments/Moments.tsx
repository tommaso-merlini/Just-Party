import { View, Text, StyleSheet, ScrollView } from "react-native";
import constants from "../../../constants";
import { Button } from "../Button/Button";
import { MomentsList } from "./MomentsList";
import { useNavigation } from "@react-navigation/native";

export const Moments = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, marginTop: constants.spacing.standard }}>
      <Text style={styles.title}>I miei momenti</Text>
      <MomentsList />
      <View style={{ paddingHorizontal: constants.spacing.standard }}>
        <Button
          props={{
            style: {
              height: 60,
              padding: constants.spacing.standard,
              borderRadius: 20,
              backgroundColor: constants.colors.purple,
              marginBottom: constants.spacing.standard * 2,
              marginTop: -constants.spacing.standard,
            },
          }}
          withFeedback={true}
          onPress={() => navigation.navigate("PostCamera")}
        >
          <View>
            <Text
              style={{
                fontSize: 18,
                color: constants.colors.words,
                fontWeight: "900",
                lineHeight: 30,
              }}
            >
              condividi un Momento
            </Text>
          </View>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: constants.colors.words,
    fontWeight: "900",
    fontSize: 25,
    marginBottom: constants.spacing.standard,
    marginLeft: constants.spacing.standard,
  },
});
