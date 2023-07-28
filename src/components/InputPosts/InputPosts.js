import { useCallback } from "react";
import { useState } from "react";
import { useMemo } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { pixels } from "../../utilities/adptivePixels";
import { MapPinIcon } from "../UI/icons";

const getIcon = (iconName) => {
  switch (iconName) {
    case "MapPin":
      return <MapPinIcon size={pixels.height[24]} />;
    default:
      return null;
  }
};

export const InputPosts = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const icon = getIcon(props.icon);

  const handleFocus = useCallback(() => setIsFocused(true));
  const handleBlur = useCallback(() => setIsFocused(false));

  const textInputProps = useMemo(() => ({
    ...props,
    style: [
      styles.input,
      props.style,
      icon && styles.iconText,
      isFocused && styles.focused,
    ],
    placeholderTextColor: "#BDBDBD",
    placeholder: props.placeholder + "...",
    onFocus: handleFocus,
    onBlur: handleBlur,
  }));

  return (
    <View style={[icon && { position: "relative" }]}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <TextInput {...textInputProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    lineHeight: pixels.height[50],
    height: pixels.height[50],
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    color: "#212121",
    fontSize: pixels.height[16],
  },
  icon: {
    position: "absolute",
    top: "45%",
    left: 0,
  },
  iconText: {
    paddingLeft: pixels.height[28],
  },
  focused: {
    backgroundColor: "#fff",
    borderColor: "#FF6C00",
  },
});
