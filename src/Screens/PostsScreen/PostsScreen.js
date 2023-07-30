import { useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { FadeInView } from "../../components/FadeInView/FadeInView";
import { PostsList } from "../../components/PostsList/PostsList";
import { User } from "../../components/User/User";
import { pixels } from "../../utilities";
import { debounce } from "../../utilities/debounce";
import { throttle } from "../../utilities/throttle";

const HEIGHT = pixels.width[60];

export const PostsScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const userHeight = useRef(new Animated.Value(HEIGHT)).current;
  const marginTopAnim = useRef(new Animated.Value(pixels.height[32])).current;

  const handleScroll = (event) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    throttledHandleScroll(contentOffsetY);
  };

  const throttledHandleScroll = debounce((contentOffsetY) => {
    if (contentOffsetY > pixels.height[32]) {
      Animated.timing(userHeight, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }).start();
      Animated.timing(marginTopAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }).start();
    } else if (contentOffsetY < pixels.height[32]) {
      Animated.timing(userHeight, {
        toValue: HEIGHT,
        duration: 250,
        useNativeDriver: false,
      }).start();
      Animated.timing(marginTopAnim, {
        toValue: pixels.height[32],
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  }, 50);

  return (
    <FadeInView style={styles.background}>
      <Animated.View
        style={{
          marginTop: marginTopAnim,
          height: userHeight,
          opacity: scrollY.interpolate({
            inputRange: [0, HEIGHT],
            outputRange: [1, 0],
            extrapolate: "clamp",
          }),
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [0, HEIGHT],
                outputRange: [0, -HEIGHT],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
        <User />
      </Animated.View>
      <PostsList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: false,
            listener: handleScroll,
          }
        )}
      />
    </FadeInView>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingHorizontal: pixels.height[16],
    backgroundColor: "#fff",
    flex: 1,
  },
});
