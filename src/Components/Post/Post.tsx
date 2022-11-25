import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { Header } from "./Header";
import constants from "../../../constants";
import { GlassyBox } from "../GlassyBox/GlassyBox";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const Post = () => {
  const [backCount, setBackCount] = useState(0);
  const [backTimer, setBackTimer] = useState(0);
  const [timer, setTimer] = useState(0);
  const [clicks, setClicks] = useState(0);
  const navigation = useNavigation();

  const checkDoubleClick = () => {
    if (clicks === 0) {
      setClicks(1);
      setTimeout(() => {
        setClicks(0);
      }, 1000);
    }

    if (clicks === 1) {
      navigation.navigate("ReactionCamera");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      {/*empty onPress prevents press events when thumb touches post when scrolling*/}
      <GlassyBox>
        <Header />
        <TouchableWithoutFeedback onPress={checkDoubleClick}>
          <View style={styles.image}></View>
        </TouchableWithoutFeedback>
      </GlassyBox>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    marginTop: constants.spacing.standard,
    backgroundColor: constants.colors.veryVeryLightDark,
    borderRadius: 15,
  },
});
