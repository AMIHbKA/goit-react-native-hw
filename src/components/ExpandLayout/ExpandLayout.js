import { useState, useRef } from "react";
import { Animated, StyleSheet } from "react-native";
import { ExpandButton } from "../ExpandButton/ExpandButton";

export const ExpandLayout = ({
  height = 200,
  expandHeight = 500,
  children,
  buttonColor,
  onExpandStart,
  onExpandEnd,
}) => {
  const [expand, setExpand] = useState(false);
  const heightValue = useRef(new Animated.Value(height)).current;

  const dimentionsHandler = () => {
    setExpand(!expand);
    onExpandStart && onExpandStart();
    Animated.spring(heightValue, {
      toValue: expand ? height : expandHeight,
      useNativeDriver: false,
    }).start(() => onExpandEnd && onExpandEnd());
  };

  return (
    <Animated.View style={[styles.box, { width: "100%", height: heightValue }]}>
      {children}
      <ExpandButton
        onPress={dimentionsHandler}
        style={styles.button}
        buttonColor={buttonColor}
        expand={expand}
      />
    </Animated.View>
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
