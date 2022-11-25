import {
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar,
  Button,
  TextInput,
  Dimensions,
} from "react-native";

import {
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import constants from "../../constants";
import { GlassyBox } from "../Components/GlassyBox/GlassyBox";
import { Navbar } from "../Components/Navbar/Navbar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { PartyCard } from "../Components/PartyCard/PartyCard";
import { useEffect, useState } from "react";

export const Explorer = ({ navigation }) => {
  const WAIT_FOR_QUERY = 0.5; //seconds
  const [text, setText] = useState();
  const [timer, setTimer] = useState<any>();

  const handleChangeText = (input) => {
    setText(input);
    handleTimer(input);
  };

  const handleTimer = (input) => {
    if (timer) clearTimeout(timer);

    setTimer(() =>
      setTimeout(() => {
        setTimer(null);
        if (input.length > 0) {
          console.log(`query ${input} eseguita dopo ${WAIT_FOR_QUERY} secondi`);
        }
      }, WAIT_FOR_QUERY * 1000)
    );
  };

  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <View style={styles.search}>
        <View style={{ width: Dimensions.get("window").width - 110 }}>
          <TextInput
            style={styles.input}
            placeholder="nome dell'organizzatore ..."
            placeholderTextColor="#7e7e7e"
            selectionColor={"#7e7e7e"}
            onChangeText={handleChangeText}
            value={text}
          ></TextInput>
        </View>
        <TouchableWithoutFeedback style={styles.filter}>
          <Ionicons
            name={"filter"}
            size={30}
            color={constants.colors.words}
          ></Ionicons>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView style={styles.scrollView}>
        <PartyCard
          description={{
            creator: "Tommaso",
            participants: 3000,
            street: "Terni, Via cavour 41",
            date: "10/10/22 alle 19:30",
            // options: [
            //   {
            //     price: 20,
            //     name: "Prevendita",
            //   },
            //   {
            //     price: 40,
            //     name: "Tavolo",
            //   },
            // ],
          }}
        />
        <View style={styles.spacing}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.colors.background,
  },
  search: {
    width: "100%",
    flexDirection: "row",
    padding: constants.spacing.standard,
    justifyContent: "space-between",
  },
  input: {
    height: 60,
    backgroundColor: constants.colors.lightDark,
    borderRadius: 20,
    padding: constants.spacing.standard,
    color: constants.colors.words,
    fontWeight: "700",
  },
  filter: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: constants.colors.lightDark,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
    padding: constants.spacing.standard,
  },
  descriptionContainer: {
    height: 150,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: constants.spacing.standard,
    marginTop: constants.spacing.standard,
    alignItems: "center",
  },
  description: {
    width: "100%",
    position: "relative",
    flexDirection: "row",
  },
  left: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: constants.spacing.standard,
  },
  right: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: constants.spacing.standard,
  },
  participants: {
    fontSize: 12,
    fontWeight: "800",
    color: "#7e7e7e",
  },
  street: {
    fontSize: 14,
    fontWeight: "800",
    color: constants.colors.words,
  },
  date: {
    fontSize: 12,
    color: "#7e7e7e",
    fontWeight: "800",
  },
  creator: {
    fontSize: 25,
    fontWeight: "900",
  },
  divisor: {
    height: 150,
    width: 1,
    borderColor: constants.colors.veryLightdark,
    borderLeftWidth: 1,
    borderStyle: "dashed",
    position: "absolute",
  },
  // only needed to create a margin on top of the bottomNavigationBar
  spacing: {
    height: 100,
  },
  button: {
    height: 60,
    backgroundColor: constants.colors.purple,
    padding: constants.spacing.standard,
    borderRadius: 20,
    margin: constants.spacing.standard,
  },
  options: {
    // backgroundColor: "red",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  optionsName: {
    color: "#7e7e7e",
    fontWeight: "900",
    fontSize: 12,
  },
});
