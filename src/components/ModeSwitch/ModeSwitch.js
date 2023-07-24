import { Pressable, StyleSheet } from "react-native";
import { pixels } from "../../utilities/adptivePixels";
import { CameraOffIcon, ImageOffIcon } from "../UI/icons";

export const ModeSwitch = ({ cameraMode, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {!cameraMode && <ImageOffIcon size={pixels.height[24]} />}
      {cameraMode && <CameraOffIcon size={pixels.height[24]} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    position: "absolute",
    bottom: 10,
    left: 10,
    alignSelf: "flex-end",
  },
});
