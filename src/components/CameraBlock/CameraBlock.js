import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { Animated, View, StyleSheet } from "react-native";
import { pixels } from "../../utilities/adptivePixels";
import { CameraButton } from "../CameraButton/CameraButton";
import { useState, useEffect, useRef } from "react";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const CameraBlock = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const aspectRatio = screenWidth / screenHeight;

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
    <View style={styles.container} onPress={() => console.log("click")}>
      <Camera
        type={type}
        ref={setCameraRef}
        ratio="16:9"
        orientation="lanscape"
        style={styles.cameraBlock}
      >
        <CameraButton
          onPress={async () => {
            if (cameraRef) {
              const { uri } = await cameraRef.takePictureAsync();
              await MediaLibrary.createAssetAsync(uri);
            }
          }}
        />
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // opacity: 0.5,
    width: "100%",
    flex: 1,
    height: pixels.height[240],
    // height: "auto",
    borderWidth: 1,
    borderRadius: 8,
    // backgroundColor: "transparent",
    borderColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: pixels.height[32],
    overflow: "hidden",
  },
  cameraBlock: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
