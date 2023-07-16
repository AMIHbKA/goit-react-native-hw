import { Pressable, StyleSheet } from "react-native";
import { CameraIcon } from "../UI/icons";

export const CameraButton = () => {
  return (
    <Pressable style={styles.container}>
      <CameraIcon size={24} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
