import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { LoginScreen } from "./src/Screens/LoginScreen/LoginScreen";
import { PostsScreen } from "./src/Screens/PostsScreen/PostsScreen";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <MainStack.Navigator>
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={PostsScreen} />
        {/* <RegistrationScreen /> */}
        {/* <LoginScreen /> */}
        {/* <PostsScreen /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
