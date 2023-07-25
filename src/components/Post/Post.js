import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { pixels } from "../../utilities/adptivePixels";
import { CommentButton } from "../CommentButton/CommentButton";

export const Post = ({ post }) => {
  return (
    <View>
      <Image source={{ uri: post.photo }} style={styles.image} />
      <Text>{post.photoName}</Text>
      <CommentButton />
      <Text>Широта: {post.location.latitude}</Text>
      <Text>Долгота: {post.location.longitude}</Text>
      <Text>Название места: {post.placeName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: pixels.height[240],
    borderRadius: 8,
  },
});
