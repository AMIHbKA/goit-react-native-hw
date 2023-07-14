import "react-native-gesture-handler";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { LoginScreen } from "./src/Screens/LoginScreen/LoginScreen";
import { PostsScreen } from "./src/Screens/PostsScreen/PostsScreen";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import { headerStyle } from "./src/components/UI/headerStyle";
import { ExitButton } from "./src/components/ExitButton/ExitButton";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={{ ...TransitionPresets.FadeFromCenter }}
      >
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={PostsScreen}
          options={{
            title: "Публікації",
            headerLeft: () => null,
            headerRight: () => <ExitButton />,
            ...headerStyle,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
