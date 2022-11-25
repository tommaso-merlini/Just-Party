import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Platform,
  Button,
  Image,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import constants from "../../constants";
import { useIsFocused } from "@react-navigation/native";

export const PrepareCameraRatio = async () => {
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

  let desiredRatio = "4:3"; // Start with the system default
  // This issue only affects Android
  if (Platform.OS === "android") {
    const ratios = await camera.getSupportedRatiosAsync();

    // Calculate the width/height of each of the supported camera ratios
    // These width/height are measured in landscape mode
    // find the ratio that is closest to the screen ratio without going over
    let distances = {};
    let realRatios = {};
    let minDistance = null;
    for (const ratio of ratios) {
      const parts = ratio.split(":");
      const realRatio = parseInt(parts[0]) / parseInt(parts[1]);
      realRatios[ratio] = realRatio;
      // ratio can't be taller than screen, so we don't want an abs()
      const distance = screenRatio - realRatio;
      distances[ratio] = realRatio;
      if (minDistance == null) {
        minDistance = ratio;
      } else {
        if (distance >= 0 && distance < distances[minDistance]) {
          minDistance = ratio;
        }
      }
    }
    // set the best match
    desiredRatio = minDistance;
    //  calculate the difference between the camera width and the screen height
    const remainder = Math.floor(
      (height - realRatios[desiredRatio] * width) / 2
    );

    return {
      remainder,
      desiredRatio,
    };
    // // set the preview padding and preview ratio
    // setImagePadding(remainder);
    // setRatio(desiredRatio);
    // // Set a flag so we don't do this
    // // calculation each time the screen refreshes
    // setIsRatioSet(true);
  }
};
