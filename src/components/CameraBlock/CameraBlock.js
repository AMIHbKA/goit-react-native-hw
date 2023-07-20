import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { View, StyleSheet } from "react-native";
import { pixels } from "../../utilities/adptivePixels";
import { CameraButton } from "../CameraButton/CameraButton";
import { useState, useEffect, useRef } from "react";

export const CameraBlock = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera type={type} ref={setCameraRef} style={styles.cameraBlock}>
        <CameraButton />
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // opacity: 0.5,
    width: "100%",

    height: pixels.height[240],
    borderWidth: 1,
    borderRadius: 8,
    // backgroundColor: "transparent",
    borderColor: "#E8E8E8",
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: pixels.height[32],
    overflow: "hidden",
  },
  cameraBlock: {
    width: "100%",
    height: pixels.height[240],
    justifyContent: "center",
    alignItems: "center",
  },
});
