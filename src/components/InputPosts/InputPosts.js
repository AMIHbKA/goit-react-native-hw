import { useMemo } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { pixels } from "../../utilities/adptivePixels";
import { textStyleGrey } from "../UI/commonStyles";
import { MapPinIcon } from "../UI/icons";

const getIcon = (iconName) => {
  switch (iconName) {
    case "MapPin":
      return <MapPinIcon />;
    default:
      return null;
  }
};

export const InputPosts = (props) => {
  const icon = getIcon(props.icon);
  const textInputProps = useMemo(() => ({
    ...props,
    style: [styles.input, props.style, icon && styles.iconText],
    placeholderTextColor: "#BDBDBD",
    placeholder: props.placeholder + "...",
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
    ...textStyleGrey,
    lineHeight: pixels.height[50],
    height: pixels.height[50],
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  icon: {
    position: "absolute",
    top: "45%",
    left: 0,
  },
  iconText: {
    paddingLeft: 28,
  },
});
