import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { ExitButton } from "../../components/ExitButton/ExitButton";
import { headerStyle } from "../../components/UI/headerStyle";
import { AddIcon, GridIcon, UserIcon } from "../../components/UI/icons";
import { PostsScreen } from "../../Screens/PostsScreen/PostsScreen";
import { pixels } from "../../utilities/adptivePixels";
import { CreatePostsScreen } from "../CreatePostsScreen/CreatePostsScreen";
import { HeaderBackButton } from "@react-navigation/elements";
import { BackButton } from "../../components/BackButton/BackButton";

const Tabs = createBottomTabNavigator();

const iconStyles = {
  width: pixels.width[70],
  height: pixels.height[40],
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 50,
};

export const Home = () => {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let icon;
          switch (route.name) {
            case "Posts":
              icon = (
                <GridIcon stroke={focused ? "#fff" : "#4d4d4d"} fill="none" />
              );
              break;
            case "Create":
              icon = <AddIcon fill={focused ? "#fff" : "#4d4d4d"} />;
              break;
            case "Profile":
              icon = <UserIcon stroke={focused ? "#fff" : "#4d4d4d"} />;
              break;
          }
          return (
            <View
              style={{
                ...iconStyles,
                backgroundColor: focused ? "#FF6C00" : "transparent",
              }}
            >
              {icon}
            </View>
          );
        },
        tabBarStyle: {
          borderWidth: 1,
          height: pixels.height[60],
          paddingHorizontal: pixels.width[85],
        },
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",

          headerRight: () => (
            <ExitButton onPress={() => navigation.navigate("Login")} />
          ),
          headerLeft: (props) => <BackButton />,
          ...headerStyle,
        }}
      />
      <Tabs.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          title: "Публікації",

          headerRight: () => <ExitButton />,
          ...headerStyle,
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={CreatePostsScreen}
        options={{
          title: "Публікації",

          headerLeft: () => (
            <ExitButton onPress={() => navigation.navigate("Login")} />
          ),
          ...headerStyle,
        }}
      />
    </Tabs.Navigator>
  );
};
