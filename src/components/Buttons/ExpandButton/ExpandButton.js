import { Pressable } from "react-native";
import { pixels } from "../../../utilities";
import { CollapseIcon, ExpandIcon } from "../../UI/icons";

export const ExpandButton = ({ expand, buttonColor, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        position: "absolute",
        bottom: 10,
        right: 10,
        alignSelf: "flex-end",
      }}
    >
      {!expand && <ExpandIcon size={pixels.height[24]} fill={buttonColor} />}
      {expand && <CollapseIcon size={pixels.height[24]} fill={buttonColor} />}
    </Pressable>
  );
};
