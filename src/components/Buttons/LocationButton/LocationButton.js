import React from "react";
import { Text, Pressable } from "react-native";
import { MapPinIcon } from "../../UI/icons";

export const LocationButton = ({ text }) => {
  return (
    <Pressable>
      <MapPinIcon />
      <Text>{text}</Text>
    </Pressable>
  );
};
