import { StyleSheet, Text, View } from "react-native";
import { BottomNavigation } from "../../components/BottomNavigation/BottomNavigation";
import { ExitButton } from "../../components/ExitButton/ExitButton";
import { ExitIcon } from "../../components/UI/icons";

export const PostsScreen = () => {
  return <Text>Postscreen</Text>;
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    flex: 2,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
