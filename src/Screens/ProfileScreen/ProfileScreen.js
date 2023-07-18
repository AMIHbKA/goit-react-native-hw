import { Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { Avatar } from "../../components/Avatar/Avatar";
import Background from "../../components/Background/Background";
import { ButtonLink } from "../../components/ButtonLink/ButtonLink";
import { ExitButton } from "../../components/ExitButton/ExitButton";
import { FadeInView } from "../../components/FadeInView/FadeInView";
import { FormLayout } from "../../components/FormLayout/FormLayout";
import { ScrollContainer } from "../../components/ScrollContainer/ScrollContainer";
import { pixels } from "../../utilities/adptivePixels";

export const ProfileScreen = () => {
  return (
    <>
      <Background />
      <FormLayout height="82%" exit>
        <FadeInView>
          <Avatar />
          <ExitButton style={styles.exitButton} />
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
    flex: 1,
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
    top: pixels.height[16],
    left: Dimensions.get("window").width - pixels.height[46],
  },
  text: {
    marginTop: pixels.height[68],
    marginBottom: pixels.height[32],
    fontSize: pixels.height[30],
    textAlign: "center",
    fontWeight: 500,
    letterSpacing: 0.3,
    color: "#212121",
  },
});
