import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { CreatePostsScreen } from "../../Screens/CreatePostsScreen/CreatePostsScreen";
import { LoginScreen } from "../../Screens/LoginScreen/LoginScreen";
import { AddIcon, GridIcon, UserIcon } from "../UI/icons";

const Tabs = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Settings"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: () => <GridIcon />,
        }}
      />
      <Tabs.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: () => <AddIcon />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: () => <UserIcon />,
        }}
      />
    </Tabs.Navigator>
  );
};
