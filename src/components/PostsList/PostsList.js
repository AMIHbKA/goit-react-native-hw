import React from "react";
import { selectSortedPosts } from "../../redux/features/posts/slice";
import { useSelector } from "react-redux";
import { FlatList, StyleSheet, View } from "react-native";
import { Post } from "../Post/Post";
// import { pixels } from "../../utilities";

// const Separator = () => <View style={{ height: pixels.height[32] }} />;

export const PostsList = ({ onScroll }) => {
  const postsData = useSelector(selectSortedPosts);

  return (
    <FlatList
      data={postsData}
      renderItem={({ item }) => <Post post={item} />}
      keyExtractor={(item) => item.id}
      // ItemSeparatorComponent={Separator}
      onScroll={onScroll}
    />
  );
};
