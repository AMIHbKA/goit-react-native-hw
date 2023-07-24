import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { ButtonMain } from "../../components/ButtonMain/ButtonMain";
import { CameraBlock } from "../../components/CameraBlock/CameraBlock";
import { DeleteButton } from "../../components/DeleteButton/DeleteButton";
import { FadeInView } from "../../components/FadeInView/FadeInView";
import { InputPosts } from "../../components/InputPosts/InputPosts";
import { ScrollContainer } from "../../components/ScrollContainer/ScrollContainer";
import { textStyleGrey } from "../../components/UI/commonStyles";
import { useKeyboardVisibility } from "../../hooks/useKeyboardVisibility";
import { pixels } from "../../utilities/adptivePixels";

export const CreatePostsScreen = () => {
  const [photoUri, setPhotoUri] = useState(null);
  const [photoName, setPhotoName] = useState(null);
  const [placeName, setPlaceName] = useState(null);

  const keyboardVisible = useKeyboardVisibility();

  const handlePhotoChange = (uri) => {
    setPhotoUri(uri);
  };

  console.log("placeName", placeName);
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <FadeInView>
        <ScrollContainer>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : null}
              style={styles.container}
            >
              <CameraBlock onPhotoChange={handlePhotoChange} />
              <Text style={styles.text}>
                {photoUri ? "Редагувати фото" : "Завантажте фото"}
              </Text>
              <InputPosts
                placeholder="Назва"
                style={{ marginTop: pixels.height[32] }}
                value={photoName}
                onChangeText={setPhotoName}
              />
              <InputPosts
                placeholder="Місцевість"
                icon="MapPin"
                style={{ marginTop: pixels.height[16] }}
                value={placeName}
                onChangeText={setPlaceName}
              />
              <ButtonMain
                text={"Опублікувати"}
                style={{ marginTop: pixels.height[32] }}
                disabled
              />
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </ScrollContainer>
      </FadeInView>
      {!keyboardVisible && (
        <DeleteButton width={24} height={24} isActive={false} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: StyleSheet.flatten([textStyleGrey, { marginTop: pixels.height[10] }]),
});
