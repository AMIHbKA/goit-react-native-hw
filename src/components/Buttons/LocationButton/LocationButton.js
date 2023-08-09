import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { pixels } from "../../../utilities";
import { MapPinIcon } from "../../UI/icons";
import { useNavigation } from "@react-navigation/native";

export const LocationButton = ({ text, latitude, longitude }) => {
  const navigation = useNavigation();

  const goToMapScreen = () => {
    navigation.navigate("Map", {
      latitude,
      longitude,
      placeName: text,
    });
  };

  return (
    <Pressable style={styles.container} onPress={goToMapScreen}>
      <MapPinIcon stroke="#FF6C00" />
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  icon: {},
  text: {
    fontSize: pixels.height[16],
    alignSelf: "center",
    marginLeft: pixels.width[6],
    color: "#212121",
    textDecorationLine: "underline",
  },
});
