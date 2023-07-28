import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
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
import uuid from "react-native-uuid";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/features/posts/slice";
import { store } from "../../redux/store";

export const CreatePostsScreen = () => {
  const [photoUri, setPhotoUri] = useState(null);
  const [photoName, setPhotoName] = useState(null);
  const [placeName, setPlaceName] = useState(null);
  const navigation = useNavigation();
  const keyboardVisible = useKeyboardVisibility();
  const [location, setLocation] = useState(null);
  const dispatch = useDispatch();

  const GoToPosts = () => {
    navigation.navigate("Posts");
  };

  const createPost = () => {
    const res = {
      photo: photoUri,
      photoName,
      placeName,
      location,
      timestamp: Date.now(),
    };
    const timestamp = Date.now();
    const date = new Date(timestamp);
    console.log("date", date);
    dispatch(addPost({ ...res, id: uuid.v4() }));
    const state = store.getState();
    console.log(state.posts.entities);
    GoToPosts();
  };

  const handlePhotoChange = (uri, coords) => {
    setPhotoUri(uri);
    setLocation(coords);
  };

  const deleteActive = photoUri || placeName || photoName;
  const publisActive = photoUri && placeName && photoName;
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
                onPress={createPost}
                disabled={!publisActive}
              />
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </ScrollContainer>
      </FadeInView>
      {!keyboardVisible && (
        <DeleteButton
          width={24}
          height={24}
          isActive={deleteActive}
          onPress={GoToPosts}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: StyleSheet.flatten([textStyleGrey, { marginTop: pixels.height[10] }]),
});
