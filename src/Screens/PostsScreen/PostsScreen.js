import { FlatList, View, StyleSheet, Text, SafeAreaView } from "react-native";
import { FadeInView } from "../../components/FadeInView/FadeInView";
import { ScrollContainer } from "../../components/ScrollContainer/ScrollContainer";
import { User } from "../../components/User/User";
import { pixels } from "../../utilities/adptivePixels";

export const PostsScreen = () => {
  return (
    <SafeAreaView style={styles.background}>
      <FadeInView>
        <User />
        <View style={styles.postsContainer}>
          <Text style={styles.text}>Posts</Text>
        </View>
      </FadeInView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingHorizontal: pixels.height[16],
    backgroundColor: "#fff",
    flex: 1,
    // justifyContent: "center",
  },
  postsContainer: {
    marginTop: pixels.height[32],
  },
  text: {
    fontSize: 16,
    color: "#000",
  },
});
