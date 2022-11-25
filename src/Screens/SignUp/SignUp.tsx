import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated,
  TouchableOpacity,
} from "react-native";
import constants from "../../../constants";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import { GlassyBox } from "../../Components/GlassyBox/GlassyBox";
import { useState, useRef } from "react";
import { Button } from "../../Components/Button/Button";
import { Footer } from "../../Components/Footer/Footer";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";

export const SignUp = ({ navigation }) => {
  const [text, setText] = useState(null);
  const [progress, setProgress] = useState(33);
  const [step, setStep] = useState(1);
  const handleChangeText = (input) => {
    setText(input);
  };

  const nextStep = () => {
    if (step === 1) {
      setStep(2);
      setProgress(66);
    }
    if (step === 2) {
      setStep(3);
      setProgress(100);
    }
    if (step === 3) {
      navigation.navigate("Home");
    }
  };

  const previousStep = () => {
    if (step === 2) {
      setStep(1);
      setProgress(33);
    }
    if (step === 3) {
      setStep(2);
      setProgress(66);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>JustParty</Text>
      <View style={{ width: "100%" }}>
        <GlassyBox>
          <Text style={styles.title}>Registrati</Text>
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step !== 1 && (
            <View>
              <TouchableOpacity onPress={previousStep}>
                <Text style={styles.back}>Indietro</Text>
              </TouchableOpacity>
            </View>
          )}

          <Button
            props={{
              style: {
                height: 60,
                padding: constants.spacing.standard,
                borderRadius: 20,
                backgroundColor: constants.colors.purple,
                marginTop: constants.spacing.standard,
                marginBottom: constants.spacing.standard,
              },
            }}
            withFeedback={true}
            onPress={nextStep}
          >
            <View>
              {step !== 3 && (
                <Text
                  style={{
                    fontSize: 22,
                    color: constants.colors.words,
                    fontWeight: "900",
                    lineHeight: 30,
                  }}
                >
                  Avanti
                </Text>
              )}
              {step === 3 && (
                <Text
                  style={{
                    fontSize: 22,
                    color: constants.colors.words,
                    fontWeight: "900",
                    lineHeight: 30,
                  }}
                >
                  Fatto!
                </Text>
              )}
            </View>
          </Button>
          <View style={styles.progressBarContainer}>
            <Animated.View
              style={[styles.progress, { width: `${progress}%` }]}
            ></Animated.View>
          </View>
        </GlassyBox>
        <View style={styles.actionsContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={[styles.actionText, { color: constants.colors.words }]}
            >
              Fammi{" "}
            </Text>
            <Text
              style={[styles.actionText, { color: constants.colors.purple }]}
            >
              accedere
            </Text>
          </View>
        </View>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: constants.spacing.standard,
    backgroundColor: constants.colors.background,
  },
  name: {
    color: constants.colors.words,
    fontSize: 35,
    fontWeight: "900",
  },
  title: {
    width: "100%",
    textAlign: "center",
    color: constants.colors.words,
    fontSize: 25,
    fontWeight: "900",
    marginBottom: constants.spacing.standard * 2,
    marginTop: constants.spacing.standard,
  },
  input: {
    height: 60,
    backgroundColor: constants.colors.lightDark,
    borderRadius: 20,
    padding: constants.spacing.standard,
    color: constants.colors.words,
    fontWeight: "700",
    marginBottom: constants.spacing.standard + 5,
  },
  progressBarContainer: {
    width: "100%",
    height: 15,
    backgroundColor: constants.colors.lightDark,
    borderRadius: 50,
    marginBottom: 0,
  },
  progress: {
    height: "100%",
    backgroundColor: constants.colors.purple,
    borderRadius: 50,
  },
  actionsContainer: {
    width: "100%",
    alignItems: "center",
  },
  actionText: {
    fontSize: 15,
    fontWeight: "700",
  },
  back: {
    width: "100%",
    textAlign: "center",
    color: "#7e7e7e",
    marginBottom: constants.spacing.standard / 2,
  },
});
