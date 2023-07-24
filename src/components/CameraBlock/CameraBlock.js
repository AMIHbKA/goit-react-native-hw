import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { View, StyleSheet, Text, Image, Button } from "react-native";
import { pixels } from "../../utilities/adptivePixels";
import { CameraButton } from "../CameraButton/CameraButton";
import { useState, useEffect, useRef } from "react";
import { ExpandLayout } from "../ExpandLayout/ExpandLayout";
import { ModeSwitch } from "../ModeSwitch/ModeSwitch";

export const CameraBlock = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photoUri, setPhotoUri] = useState(null);
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [cameraMode, setCameraMode] = useState(true);

  const handlePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setPhotoUri(uri);
      setCameraMode(!cameraMode);
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

  return (
    <ExpandLayout
      height={pixels.height[240]}
      expandHeight={pixels.height[500]}
      style={styles.container}
      onExpandStart={handleAnimationStart}
      onExpandEnd={handleAnimationEnd}
    >
      {cameraMode && cameraEnabled ? (
        <Camera
          type={type}
          ref={setCameraRef}
          ratio="16:9"
          orientation="lanscape"
          style={styles.cameraBlock}
        >
          <CameraButton onPress={handlePhoto} />
        </Camera>
      ) : (
        <View style={[styles.cameraBlock, { backgroundColor: "black" }]} />
      )}
      {photoUri && !cameraMode && (
        <Image source={{ uri: photoUri }} style={styles.image} />
      )}
      {photoUri && (
        <ModeSwitch
          cameraMode={cameraMode}
          onPress={() => setCameraMode(!cameraMode)}
        />
      )}
    </ExpandLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
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
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  expandButton: {
    position: "absolute",
    bottom: pixels.height[15],
    right: "5%",
  },
});
