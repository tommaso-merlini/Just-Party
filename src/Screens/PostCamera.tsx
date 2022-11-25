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
import { Camera, CameraType, FlashMode, WhiteBalance } from "expo-camera";
import constants from "../../constants";
import { useIsFocused } from "@react-navigation/native";
import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Shadow } from "../Components/Navbar/Shadow";
import Constants from "expo-constants";
import {
  GestureHandlerRootView,
  PinchGestureHandler,
} from "react-native-gesture-handler";

export const PostCamera = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [hasTakenPicture, setHasTakenPicture] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(false);
  const [supportedRatios, setSupportedRatios] = useState(null);
  const [isLoadingShot, setIsLoadingShot] = useState(false);
  const [zoom, setZoom] = useState(0);

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
      // if (flash) {
      //   setUseFlash(true);
      //   setTimeout(async () => {
      //     setUseFlash(false);
      //   }, 3000);
      // }

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

  const onPinchGesture = (event: any) => {
    setZoom(event.nativeEvent.scale - 1);
    if (zoom < 0) {
      setZoom(0);
    }

    if (zoom > 1) {
      setZoom(1);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }} style={styles.container}>
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
            Scatta{" "}
          </Text>
          <Image
            source={require("../../Icons/Emojis/popper.png")}
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
          <PinchGestureHandler onGestureEvent={(e) => onPinchGesture(e)}>
            <Camera
              style={styles.cameraPreview}
              type={type}
              ref={(ref) => {
                setCamera(ref);
              }}
              // whiteBalance={WhiteBalance.fluorescent}
              onCameraReady={setCameraReady}
              ratio={"4:3"}
              flashMode={flash ? FlashMode.on : FlashMode.off}
              zoom={zoom}
            >
              <View style={styles.zoomContainer}>
                <Text style={styles.zoom}>{Number(zoom + 1).toFixed(1)}x</Text>
              </View>
            </Camera>
          </PinchGestureHandler>
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
          <View
            style={[
              styles.actionsContainer,
              {
                justifyContent: "space-between",
                paddingHorizontal: constants.spacing.standard * 2,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                setImage(null);
                setHasTakenPicture(false);
                setZoom(0);
                setCameraReady();
                // camera.resumePreview();
              }}
              style={styles.actionIcon}
            >
              <Ionicons
                name={"close-circle-outline"}
                size={70}
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
            onPress={() => setFlash(!flash)}
            style={styles.actionIcon}
          >
            <Ionicons
              name={flash ? "flash" : "flash-off"}
              size={40}
              color={constants.colors.words}
            />
          </TouchableOpacity>
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
          <TouchableOpacity
            onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
              // resetRatio();
            }}
            style={styles.actionIcon}
          >
            <Ionicons
              name={"refresh-outline"}
              size={40}
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
    </GestureHandlerRootView>
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
    height: Dimensions.get("window").width,
    flexDirection: "row",
    borderRadius: 30,
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
  zoomContainer: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 50 + constants.spacing.standard,
  },
  zoom: {
    backgroundColor: constants.colors.veryVeryLightDark,
    color: constants.colors.words,
    paddingHorizontal: constants.spacing.standard,
    paddingVertical: constants.spacing.standard / 2,
    borderRadius: 50,
  },
});
