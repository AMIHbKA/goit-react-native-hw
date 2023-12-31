import { Image, View, Text, StyleSheet } from "react-native";
import { pixels } from "../../utilities";
import { useState } from "react";

export const User = ({ style }) => {
  const [image, setImage] = useState(null);
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.photo} source={{ uri: image }} />
      <View style={styles.textContainer}>
        <Text style={styles.userText}>UserName</Text>
        <Text style={styles.emailText}>email@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "auto",
    flexDirection: "row",
  },
  photo: {
    height: pixels.width[60],
    width: pixels.width[60],
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  textContainer: {
    alignSelf: "center",
    marginLeft: pixels.height[8],
  },
  userText: {
    fontWeight: 700,
    fontSize: pixels.height[13],
  },
  emailText: {
    fontSize: pixels.height[11],
  },
});
