import "react-native-gesture-handler";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import {
  Home,
  LoginScreen,
  RegistrationScreen,
  CommentsScreen,
} from "./src/Screens";
import { BackButton } from "./src/components/Buttons";
import { headerStyle } from "./src/components/UI/commonStyles";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
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
          <MainStack.Screen
            name="Comments"
            component={CommentsScreen}
            options={{
              title: "Публікації",
              headerLeft: (props) => <BackButton />,
              ...headerStyle,
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
