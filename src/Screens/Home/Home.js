import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { ExitButton } from "../../components/ExitButton/ExitButton";
import { headerStyle } from "../../components/UI/commonStyles";
import { AddIcon, GridIcon, UserIcon } from "../../components/UI/icons";
import { PostsScreen } from "../../Screens/PostsScreen/PostsScreen";
import { pixels } from "../../utilities/adptivePixels";
import { CreatePostsScreen } from "../CreatePostsScreen/CreatePostsScreen";
import { BackButton } from "../../components/BackButton/BackButton";
import { ProfileScreen } from "../ProfileScreen/ProfileScreen";

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
        unmountOnBlur: true,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let icon;
          switch (route.name) {
            case "Posts":
              icon = (
                <GridIcon
                  stroke={focused ? "#fff" : "#4d4d4d"}
                  fill="none"
                  size={pixels.height[24]}
                />
              );
              break;
            case "Create":
              icon = (
                <AddIcon
                  fill={focused ? "#fff" : "#4d4d4d"}
                  size={pixels.height[24]}
                />
              );
              break;
            case "Profile":
              icon = (
                <UserIcon
                  stroke={focused ? "#fff" : "#4d4d4d"}
                  size={pixels.height[24]}
                />
              );
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

          headerRight: () => <ExitButton size={pixels.height[24]} />,
          ...headerStyle,
        }}
      />

      <Tabs.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          tabBarStyle: { display: "none" },
          headerLeft: (props) => <BackButton />,
          ...headerStyle,
          tabBarVisible: false,
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          headerLeft: () => (
            <ExitButton onPress={() => navigation.navigate("Login")} />
          ),
          ...headerStyle,
        }}
      />
    </Tabs.Navigator>
  );
};
