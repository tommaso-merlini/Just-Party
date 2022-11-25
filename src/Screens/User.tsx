import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Linking,
} from "react-native";
import constants from "../../constants";
import { Shadow } from "../Components/Navbar/Shadow";
import Ionicons from "react-native-vector-icons/Ionicons";
import { GlassyBox } from "../Components/GlassyBox/GlassyBox";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "../Components/Button/Button";

export const User = ({ navigation }) => {
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
            <Text style={styles.title}>Tommaso Merlini</Text>
          </View>
        </View>
      </Shadow>
      <ScrollView style={{ padding: constants.spacing.standard }}>
        <View style={styles.top}>
          <View style={styles.left}>
            <View style={styles.profileImage}></View>
          </View>
          <View style={styles.right}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.number}>20</Text>
              <Text style={styles.word}>party organizzati</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.number}>2000</Text>
              <Text style={styles.word}>follower</Text>
            </View>
          </View>
        </View>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          perspiciatis, error harum dolorem qui eveniet voluptatibus commodi
          deleniti, aperiam dolorum nemo cum facere neque aspernatur? Soluta
          voluptatibus labore autem suscipit?
        </Text>
        <Button
          props={{
            style: styles.follow,
          }}
          withFeedback={true}
        >
          <Text
            style={{
              height: "100%",
              fontSize: 18,
              color: constants.colors.words,
              fontWeight: "900",
              lineHeight: 35,
            }}
          >
            segui
          </Text>
        </Button>
        <Button
          props={{
            style: styles.instagramButton,
          }}
          onPress={() => {
            Linking.openURL("https://instagram.com/tommaso.merlini_");
          }}
          withFeedback={true}
        >
          <Image
            source={require("../../Icons/instagram.png")}
            style={styles.instagramImage}
          ></Image>
          <Text
            style={{
              fontSize: 18,
              color: constants.colors.words,
              fontWeight: "900",
              lineHeight: 20,
            }}
          >
            @tommaso.merlini_
          </Text>
        </Button>
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
  },
  top: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: constants.spacing.standard,
  },
  left: {
    paddingRight: constants.spacing.standard,
  },
  right: {
    width: Dimensions.get("window").width - 125,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 80,
    backgroundColor: constants.colors.veryVeryLightDark,
  },
  number: {
    color: constants.colors.words,
    fontSize: 16,
    fontWeight: "700",
  },
  word: {
    color: "#7e7e7e",
    fontSize: 14,
    fontWeight: "900",
  },
  description: {
    color: constants.colors.words,
    fontSize: 13,
    marginBottom: constants.spacing.standard,
    fontWeight: "6700",
  },
  follow: {
    height: 40,
    borderRadius: 10,
    backgroundColor: constants.colors.purple,
    marginBottom: constants.spacing.standard * 2,
  },
  instagramButton: {
    height: 80,
    padding: constants.spacing.standard,
    borderRadius: 20,
    backgroundColor: constants.colors.veryVeryLightDark,
  },
  instagramImage: {
    position: "absolute",
    width: 50,
    height: 50,
    left: constants.spacing.standard,
  },
});
