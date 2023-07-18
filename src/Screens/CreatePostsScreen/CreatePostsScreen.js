import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { ButtonMain } from "../../components/ButtonMain/ButtonMain";
import { ContentBlock } from "../../components/ContentBlock/ContentBlock";
import { DeleteButton } from "../../components/DeleteButton/DeleteButton";
import { FadeInView } from "../../components/FadeInView/FadeInView";
import { InputPosts } from "../../components/InputPosts/InputPosts";
import { ScrollContainer } from "../../components/ScrollContainer/ScrollContainer";
import { textStyleGrey } from "../../components/UI/commonStyles";
import { pixels } from "../../utilities/adptivePixels";

export const CreatePostsScreen = () => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        paddingHorizontal: pixels.width[16],
      }}
    >
      <FadeInView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={styles.container}
          >
            <ScrollContainer>
              <ContentBlock />
              <Text style={styles.text}>Завантажте фото</Text>
              <InputPosts
                placeholder="Назва"
                style={{ marginTop: pixels.height[32] }}
              />
              <InputPosts
                placeholder="Місцевість"
                icon="MapPin"
                style={{ marginTop: pixels.height[16] }}
              />
              <ButtonMain
                text="Опублікувати"
                style={{ marginTop: pixels.height[32] }}
                disabled
              />
            </ScrollContainer>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </FadeInView>
      <DeleteButton width={24} height={24} isActive={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: { ...textStyleGrey, marginTop: pixels.height[10] },
});
