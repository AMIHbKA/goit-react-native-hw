import "react-native-gesture-handler";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { LoginScreen } from "./src/Screens/LoginScreen/LoginScreen";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import { Home } from "./src/Screens/Home/Home";
import { ExpandLayout, Test } from "./src/Screens/Test/Test";
import { View } from "react-native";

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
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
