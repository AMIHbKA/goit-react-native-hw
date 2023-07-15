import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { useEffect } from "react";

export const CreatePostsScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ tabBarVisible: false });
  }, [navigation]);

  return <Text>CreatePostsScreen</Text>;
};
