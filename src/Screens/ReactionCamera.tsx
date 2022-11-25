import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Platform,
  Button,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Camera, CameraType, FlashMode } from "expo-camera";
import constants from "../../constants";
import { useIsFocused } from "@react-navigation/native";
import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Shadow } from "../Components/Navbar/Shadow";
import Constants from "expo-constants";

export const ReactionCamera = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [hasTakenPicture, setHasTakenPicture] = useState(false);
  const [type, setType] = useState(CameraType.front);
  const [flash, setFlash] = useState(false);
  const [useFlash, setUseFlash] = useState(false);
  const [supportedRatios, setSupportedRatios] = useState(null);
  const [isLoadingShot, setIsLoadingShot] = useState(false);

  //  camera permissions
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);

  // Screen Ratio and image padding
  const [imagePadding, setImagePadding] = useState(0);
  const [ratio, setRatio] = useState("4:3"); // default is 4:3
  const { height, width } = Dimensions.get("window");
  const screenRatio = height / width;
  const [isRatioSet, setIsRatioSet] = useState(false);

  // on screen  load, ask for permission to use the camera
  useEffect(() => {
    async function getCameraStatus() {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status == "granted");
    }
    getCameraStatus();
    // prepareRatio();
  }, []);

  // set the camera ratio and padding.
  // this code assumes a portrait mode screen
  const prepareRatio = async () => {
    const ratios = await camera.getSupportedRatiosAsync();

    //   console.log(ratios);
    //   if (Platform.OS === "android") {
    //     const ratio = ratios.find((ratio) => ratio === "1:1") || [
    //       ratios.length - 1,
    //     ];
    //     console.log(ratio);
    //     setRatio(ratio);
    //   }
  };

  // the camera must be loaded in order to access the supported ratios
  const setCameraReady = async () => {
    // await prepareRatio();
  };

  const takePicture = async () => {
    if (camera) {
      if (flash) {
        setUseFlash(true);
        setTimeout(() => {
          setUseFlash(false);
        }, 2000);
      }
      const data = await camera.takePictureAsync(null);
      if (type === CameraType.front) {
        const manipResult = await manipulateAsync(data.uri, [
          { rotate: 180 },
          { flip: FlipType.Vertical },
        ]);
        setImage(manipResult.uri);
      } else {
        setImage(data.uri);
      }

      setIsLoadingShot(false);
      setHasTakenPicture(true);
    }
  };

  return (
    <View style={styles.container}>
      {!hasTakenPicture && !isLoadingShot && (
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: constants.colors.words,
              fontSize: 30,
              fontWeight: "900",
              textShadowColor: constants.colors.veryDarkBackground,
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10,
            }}
          >
            Sorridi{" "}
          </Text>
          <Image
            source={require("../../Icons/Emojis/smiling-face.png")}
            style={{ height: 40, width: 40 }}
          />
        </View>
      )}

      {!hasTakenPicture && isLoadingShot && (
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: constants.colors.words,
              fontSize: 30,
              fontWeight: "900",
              textShadowColor: constants.colors.veryDarkBackground,
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 10,
            }}
          >
            Un momento...{" "}
          </Text>
          <Image
            source={require("../../Icons/Emojis/hourglass-not-done.png")}
            style={{ height: 40, width: 40 }}
          />
        </View>
      )}

      {!hasTakenPicture && isFocused && (
        <View style={styles.cameraContainer}>
          <Camera
            style={styles.cameraPreview}
            type={type}
            ref={(ref) => {
              setCamera(ref);
            }}
            autoFocus={false}
            onCameraReady={setCameraReady}
            ratio={"4:3"}
            flashMode={useFlash ? FlashMode.on : FlashMode.off}
            // flashMode={FlashMode.on}
          />
        </View>
      )}
      {image && isFocused && (
        <View
          style={[
            styles.container,
            {
              paddingTop: -constants.spacing.standard,
              paddingHorizontal: 0,
            },
          ]}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: constants.colors.words,
                fontSize: 30,
                fontWeight: "900",
                textShadowColor: constants.colors.veryDarkBackground,
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10,
              }}
            >
              Woooow{" "}
            </Text>
            <Image
              source={require("../../Icons/Emojis/sparkles.png")}
              style={{ height: 35, width: 35 }}
            />
          </View>
          <View style={styles.cameraContainer}>
            <Image source={{ uri: image }} style={styles.cameraPreview} />
          </View>
          <View style={styles.actionsContainer}>
            <TouchableOpacity
              onPress={() => {
                setImage(null);
                setHasTakenPicture(false);
                setCameraReady();
                // camera.resumePreview();
              }}
              style={styles.actionIcon}
            >
              <Ionicons
                name={"close-circle-outline"}
                size={80}
                color={constants.colors.words}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.actionIcon}>
              <View
                style={{
                  backgroundColor: constants.colors.purple,
                  borderRadius: 50,
                  padding: 20,
                }}
              >
                <Ionicons
                  name={"paper-plane"}
                  size={30}
                  color={constants.colors.words}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {!hasTakenPicture && !isLoadingShot && (
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            onPress={() => {
              setIsLoadingShot(true);
              takePicture();
            }}
            style={styles.actionIcon}
          >
            <Ionicons
              name={"ellipse-outline"}
              size={100}
              color={constants.colors.words}
            />
          </TouchableOpacity>
        </View>
      )}

      {!hasTakenPicture && isLoadingShot && (
        <View style={styles.actionsContainer}>
          <ActivityIndicator
            size="large"
            color={constants.colors.purple}
            style={{ width: 100, height: 100 }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: constants.colors.veryVeryDarkBackground,
    justifyContent: "space-evenly",
    paddingHorizontal: constants.spacing.standard,
  },
  information: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  cameraPreview: {
    flex: 1,
    aspectRatio: 1 - 0.2,
  },

  cameraContainer: {
    width: "100%",
    height: Dimensions.get("window").width - constants.spacing.standard * 2,
    flexDirection: "row",
    borderRadius: 1000,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: constants.colors.lightDark,
  },
  actionIcon: {
    justifyContent: "center",
    // backgroundColor: "red",
  },
  actionsContainer: {
    width: "100%",
    height: 120,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
