import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  FlatList,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import constants from "../../constants";
import { Moments } from "../Components/Moments/Moments";
import { Navbar } from "../Components/Navbar/Navbar";
import { Post } from "../Components/Post/Post";

export default function Feed({ navigation }) {
  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        {/* <Button
          title="fai una foto"
          onPress={() => navigation.navigate("PostCamera")}
        ></Button> */}
        <Moments />
        <View style={{ padding: constants.spacing.standard }}>
          <Post />
          <Post />
          <Post />
          <Post />
          <View style={styles.spacing}></View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.colors.background,
  },
  scrollView: {
    width: "100%",

    // backgroundColor: "red",
  },
  // only needed to create a margin on top of the bottomNavigationBar
  spacing: {
    height: 100,
  },
});
