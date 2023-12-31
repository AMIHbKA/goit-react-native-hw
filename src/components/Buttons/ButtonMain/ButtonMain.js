import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { pixels } from "../../../utilities";

export const ButtonMain = (props) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.button,
        props.style,
        props.disabled && { backgroundColor: "#F6F6F6" },
      ]}
    >
      <Text style={[styles.buttonText, props.disabled && { color: "#BDBDBD" }]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: pixels.height[16],
    paddingHorizontal: pixels.width[32],
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: pixels.height[16],
  },
  disabled: {},
});
