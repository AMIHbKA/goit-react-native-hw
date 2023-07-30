import { useState } from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { pixels } from "../../../utilities";
import { CommentIcon } from "../../UI/icons";

export const CommentButton = () => {
  const [count, setCount] = useState(2);

  return (
    <Pressable style={styles.container}>
      <CommentIcon
        stroke={count ? "#FF6C00" : "#BDBDBD"}
        fill={count ? "#FF6C00" : "none"}
      />
      <Text style={[styles.text, count && { color: "#212121" }]}>{count}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: "row",
  },
  text: {
    alignSelf: "center",
    marginLeft: pixels.width[6],
    color: "#BDBDBD",
  },
});
