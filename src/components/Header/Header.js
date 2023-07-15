import { View, StyleSheet } from "react-native";

export const Header = ({ text }) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: 49, borderWidth: 1 },
  header: {},
});
