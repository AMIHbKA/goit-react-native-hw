import { pixels } from "../../utilities/adptivePixels";

export const headerStyle = {
  headerStyle: {
    // height: pixels.height[60],
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.3,
    shadowRadius: 0,
    elevation: 1,
  },
  headerTintColor: "#212121",
  headerTitleStyle: {
    fontWeight: 500,
    fontSize: pixels.height[17],
    // lineHeight: pixels.height[60],
  },
  headerTitleAlign: "center",
};
