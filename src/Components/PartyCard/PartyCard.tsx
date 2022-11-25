import {
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";

import {
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import constants from "../../../constants";
import { GlassyBox } from "../GlassyBox/GlassyBox";
import { Navbar } from "../Navbar/Navbar";
import { SchemaTypeOptions } from "mongoose";
import { Button } from "../Button/Button";
import { useNavigation } from "@react-navigation/native";

export const PartyCard = ({ description }) => {
  const navigation = useNavigation();
  return (
    <GlassyBox>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("User")}>
        <View style={styles.descriptionContainer}>
          <View style={styles.divisor} />
          <View style={styles.description}>
            <View style={styles.left}>
              <View>
                <Text
                  style={{
                    color: constants.colors.words,
                    fontSize: 12,
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  Party di{" "}
                </Text>

                <Text
                  style={[
                    styles.creator,
                    {
                      color: constants.colors.purple,
                      lineHeight: 30,
                      textAlign: "center",
                    },
                  ]}
                >
                  {description.creator}
                </Text>
                <Text style={styles.participants}>
                  {description.participants} Partecipanti
                </Text>
              </View>
            </View>
            <View style={styles.right}>
              <Text style={styles.street}>{description.street}</Text>
              <Text style={styles.date}>{description.date}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View>
        {
          //if the party is not free(has options)
        }
        {description.options &&
          !description.expired &&
          description.options.map((option, index) => (
            <View key={index}>
              <View style={styles.options}>
                <Text style={styles.optionsName}>{option.name} </Text>
              </View>

              <Button
                props={{
                  style: {
                    height: 60,
                    padding: constants.spacing.standard,
                    borderRadius: 20,
                    margin: constants.spacing.standard,
                    backgroundColor: constants.colors.purple,
                  },
                }}
                withFeedback={true}
                onPress={() => console.log("ciao")}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 24,
                      color: constants.colors.words,
                      fontWeight: "900",
                      lineHeight: 30,
                    }}
                  >
                    {option.price} $
                  </Text>
                </View>
              </Button>
            </View>
          ))}
        {
          //if the party is free and not expired
        }
        {!description.options && !description.expired && (
          <Button
            props={{
              style: {
                height: 60,
                padding: constants.spacing.standard,
                borderRadius: 20,
                margin: constants.spacing.standard,
                backgroundColor: constants.colors.purple,
              },
            }}
            withFeedback={true}
            onPress={() => console.log("ciao")}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: constants.colors.words,
                  fontWeight: "900",
                  lineHeight: 30,
                }}
              >
                Partecipa
              </Text>
            </View>
          </Button>
        )}
      </View>
    </GlassyBox>
  );
};

const styles = StyleSheet.create({
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
    textAlign: "center",
  },
  street: {
    fontSize: 14,
    fontWeight: "800",
    color: constants.colors.words,
  },
  date: {
    fontSize: 12,
    // color: "#7e7e7e",
    color: constants.colors.words,
    fontWeight: "800",
  },
  creator: {
    fontSize: 28,
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
    fontSize: 14,
  },
});
