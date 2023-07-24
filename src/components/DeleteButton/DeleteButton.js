import { Pressable, StyleSheet, View } from "react-native";
import { TrashIcon } from "../UI/icons";
import { pixels } from "../../utilities/adptivePixels";

export const DeleteButton = ({ width, height, isActive }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, isActive && styles.active]}
        disabled={!isActive}
        onPress={() => console.log("click")}
      >
        <TrashIcon
          style={styles.test}
          size={pixels.height[24]}
          fill={isActive ? "#fff" : "#BDBDBD"}
          stroke={isActive ? "#fff" : "#BDBDBD"}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: pixels.height[40],
    marginBottom: pixels.height[10],
  },
  button: {
    width: pixels.width[70],
    height: pixels.height[40],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#F6F6F6",
    alignSelf: "center",
  },
  active: { backgroundColor: "#FF6C00" },
  test: { fill: "white", stroke: "black" },
});
