import React from "react";
import { selectPosts, selectPostsIds } from "../../redux/features/posts/slice";
import { useSelector } from "react-redux";
import { FlatList, StyleSheet, View } from "react-native";
import { Post } from "../Post/Post";
import { pixels } from "../../utilities/adptivePixels";

const Separator = () => <View style={{ height: pixels.height[32] }} />;

export const PostsList = () => {
  const postsData = useSelector(selectPosts);
  console.log("postsData", postsData);

  return (
    <FlatList
      style={{ marginTop: pixels.height[32] }}
      data={postsData}
      renderItem={({ item }) => <Post post={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={Separator}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    marginHorizontal: pixels.height[32],
  },
});
