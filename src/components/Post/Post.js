import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { pixels } from "../../utilities";
import { CommentButton, LocationButton } from "../Buttons";
import { ExpandLayout } from "../ExpandLayout/ExpandLayout";

export const Post = ({ post }) => {
  console.log("post", post);
  return (
    <View style={styles.container}>
      <ExpandLayout height={pixels.height[240]}>
        <Image source={{ uri: post.photo }} style={styles.image} />
      </ExpandLayout>

      <Text style={styles.title}>{post.photoName}</Text>
      <View style={styles.infoContainer}>
        <CommentButton />
        <LocationButton
          text={post.placeName}
          latitude={post.location.latitude}
          longitude={post.location.longitude}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: pixels.height[32],
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: pixels.height[16],
    fontWeight: 500,
    marginVertical: pixels.height[8],
  },
});
