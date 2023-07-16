import { View } from "react-native";
import { StyleSheet } from "react-native";
import { pixels } from "../../utilities/adptivePixels";
import { CameraButton } from "../CameraButton/CameraButton";

export const ContentBlock = () => {
  return (
    <View style={styles.container}>
      <CameraButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: pixels.height[240],
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
});
