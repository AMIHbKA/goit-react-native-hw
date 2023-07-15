import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export const PostsScreen = () => {
  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.text}>Postscreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    justifyContent: "flex-end",
  },
});
