import { Text } from "react-native";
import { TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Dimensions, StyleSheet, View } from "react-native";
import { Avatar } from "../../components/Avatar/Avatar";
import Background from "../../components/Background/Background";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { ExitButton } from "../../components/ExitButton/ExitButton";
import { FadeInView } from "../../components/FadeInView/FadeInView";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { ScrollContainer } from "../../components/ScrollContainer/ScrollContainer";
import { ExitIcon } from "../../components/UI/icons";
import { pixels } from "../../utilities/adptivePixels";

export const ProfileScreen = () => {
  return (
    <>
      <Background />
      <FormLayout height="82%" exit>
        <FadeInView>
          <View>
            <Avatar />
            <ExitButton style={styles.exitButton} size={pixels.height[24]} />
          </View>
          <ScrollContainer>
            <Text style={styles.text}>UserName</Text>
          </ScrollContainer>
        </FadeInView>
      </FormLayout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    borderWidth: 1,
  },
  text: {
    marginTop: pixels.height[32],
    marginBottom: pixels.height[32],
    fontSize: pixels.height[30],
    textAlign: "center",
    fontWeight: 500,
    letterSpacing: 0.3,
    color: "#212121",
  },
  exitButton: {
    position: "absolute",
    top: pixels.height[22],
    left: Dimensions.get("window").width - pixels.height[46],
    width: pixels.width[25],
    height: pixels.width[25],
  },
});
