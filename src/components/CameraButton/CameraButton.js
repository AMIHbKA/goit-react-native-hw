import { Pressable, StyleSheet } from "react-native";
import { pixels } from "../../utilities/adptivePixels";
import { CameraIcon } from "../UI/icons";

export const CameraButton = () => {
  return (
    <Pressable style={styles.container}>
      <CameraIcon size={pixels.height[24]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: pixels.height[60],
    height: pixels.height[60],
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
