import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { pixels } from "../../utilities/adptivePixels";
import { BackIcon } from "../UI/icons";

export const BackButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={{ marginLeft: pixels.width[16] }}
      onPress={() => navigation.goBack()}
    >
      <BackIcon size={pixels.height[24]} />
    </Pressable>
  );
};
