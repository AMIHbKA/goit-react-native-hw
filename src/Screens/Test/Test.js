import { useState } from "react";
import { NativeModules, LayoutAnimation, StyleSheet, View } from "react-native";
import { ExpandButton } from "../../components/ExpandButton/ExpandButton";

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export const test = ({
  height = 200,
  expandHeight = 500,
  children,
  buttonColor,
}) => {
  const [heightDimention, setHeightDimention] = useState(height);
  const [expand, setExpand] = useState(false);
  const dimentionsHandler = () => {
    setExpand(!expand);
    // Animate the update
    LayoutAnimation.spring();
    setHeightDimention(expand ? height : expandHeight);
  };

  return (
    <View style={[styles.box, { width: "100%", height: heightDimention }]}>
      {children}
      <ExpandButton
        onPress={dimentionsHandler}
        style={styles.button}
        buttonColor={buttonColor}
        expand={expand}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "100%",
  },
  button: {
    position: "absolute",
    bottom: 10,
    right: 10,
    alignSelf: "flex-end",
  },
});
