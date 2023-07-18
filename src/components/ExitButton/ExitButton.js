import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { pixels } from "../../utilities/adptivePixels";
import { ExitIcon } from "../UI/icons";

export const ExitButton = ({ width, height, onPress, style }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[{ marginRight: pixels.width[16] }, style]}
      onPress={() => navigation.navigate("Login")}
    >
      <ExitIcon width={width} height={height} />
    </TouchableOpacity>
  );
};
