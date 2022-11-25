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
import { HorizontalSeparator } from "../Components/HorizontalSeparator/HorizontalSeparetor";

export const Tickets = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />

      <ScrollView style={styles.scrollView}>
        <HorizontalSeparator word={"Attivi"} />
        <View style={{ height: constants.spacing.standard }} />
        <PartyCard
          description={{
            creator: "Tommaso",
            participants: 3000,
            street: "Terni, Via cavour 41",
            date: "10/10/22 alle 19:30",
            options: [
              {
                price: 20,
                name: "Prevendita",
              },
              {
                price: 40,
                name: "Tavolo",
              },
            ],
          }}
        />
        <HorizontalSeparator word={"Scaduti"} />
        <View style={{ height: constants.spacing.standard }} />

        <PartyCard
          description={{
            creator: "Tommaso",
            participants: 3000,
            street: "Terni, Via cavour 41",
            date: "10/10/22 alle 19:30",
            expired: true,
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
  scrollView: {
    width: "100%",
    padding: constants.spacing.standard,
  },
  separator: {
    height: 2,
    flex: 1,
    alignSelf: "center",
    borderColor: "#7e7e7e",
    borderTopWidth: 1,
    borderStyle: "dashed",
    marginBottom: 10,
  },
  // only needed to create a margin on top of the bottomNavigationBar
  spacing: {
    height: 100,
  },
});
