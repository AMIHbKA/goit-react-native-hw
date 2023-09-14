import { Pressable, StyleSheet } from "react-native";
import { pixels } from "../../../utilities";
import { CameraIcon } from "../../UI/icons";

export const CameraButton = (props) => {
  return (
    <Pressable {...props} style={styles.container}>
      <CameraIcon size={pixels.height[24]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: pixels.height[60],
    height: pixels.height[60],
    // backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    // opacity: 0.5,
  },
});
