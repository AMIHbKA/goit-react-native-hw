import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { View, StyleSheet, Text, Image, Button } from "react-native";
import { pixels } from "../../utilities/adptivePixels";
import { CameraButton } from "../CameraButton/CameraButton";
import { useState, useEffect, useRef } from "react";
import { ExpandLayout } from "../ExpandLayout/ExpandLayout";

export const CameraBlock = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photoUri, setPhotoUri] = useState(null);
  const [cameraEnabled, setCameraEnabled] = useState(true);

  const handlePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setPhotoUri(uri);
      await MediaLibrary.createAssetAsync(uri);
    }
  };

  const handleAnimationStart = () => setCameraEnabled(false);
  const handleAnimationEnd = () => setCameraEnabled(true);

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

  console.log("cameraEnabled", cameraEnabled);
  return (
    <ExpandLayout
      onExpandStart={handleAnimationStart}
      onExpandEnd={handleAnimationEnd}
    >
      {cameraEnabled ? (
        <Camera
          type={type}
          ref={setCameraRef}
          ratio="16:9"
          orientation="lanscape"
          style={styles.cameraBlock}
        >
          <CameraButton onPress={handlePhoto} />
          {photoUri && (
            <Image source={{ uri: photoUri }} style={styles.image} />
          )}
        </Camera>
      ) : (
        <View style={[styles.cameraBlock, { backgroundColor: "black" }]} />
      )}
    </ExpandLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    opacity: 0.5,
    width: "100%",
    flex: 1,
    // height: pixels.height[240],
    height: "100%",
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
    // height: pixels.height[240],
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "absolute",
    width: "100%",
    // objectFit: "fill",
    // opacity: 0.5,
    height: "100%",
    // height: pixels.height[240],
    borderWidth: 1,
  },
  expandButton: {
    position: "absolute",
    bottom: pixels.height[15],
    right: "5%",
  },
});
