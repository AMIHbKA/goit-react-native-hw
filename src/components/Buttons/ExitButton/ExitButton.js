import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { pixels } from "../../../utilities/adptivePixels";
import { ExitIcon } from "../../UI/icons";

export const ExitButton = ({ size, onPress, style }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[{ marginRight: pixels.width[16] }, style]}
      onPress={() => navigation.navigate("Login")}
    >
      <ExitIcon size={size} />
    </TouchableOpacity>
  );
};
