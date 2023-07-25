import { View, StyleSheet, Text } from "react-native";
import { FadeInView } from "../../components/FadeInView/FadeInView";
import { PostsList } from "../../components/PostsList/PostsList";
import { User } from "../../components/User/User";
import { pixels } from "../../utilities/adptivePixels";

export const PostsScreen = () => {
  return (
    <FadeInView style={styles.background}>
      <User />
      <PostsList />
    </FadeInView>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingHorizontal: pixels.height[16],
    backgroundColor: "#fff",
    flex: 1,
  },
  postsContainer: {
    marginTop: pixels.height[32],
  },
  text: {
    fontSize: 16,
    color: "#000",
  },
});
