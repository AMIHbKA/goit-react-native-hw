import { Pressable, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { pixels } from "../../../utilities/adptivePixels";

export const ButtonLink = ({ text, link, style, onPress }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{text}</Text>
      {link && (
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.text, styles.link]}>{link}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  text: { color: "#1B4371", fontSize: pixels.height[16] },
  link: { textDecorationLine: "underline" },
});
