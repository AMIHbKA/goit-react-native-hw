import { TouchableOpacity } from "react-native-gesture-handler";
import { pixels } from "../../utilities/adptivePixels";
import { ExitIcon } from "../UI/icons";

export const ExitButton = ({ width, height, onPress }) => {
  return (
    <TouchableOpacity
      style={{ marginRight: pixels.width[10] }}
      onPress={onPress}
    >
      <ExitIcon width={width} height={height} />
    </TouchableOpacity>
  );
};
