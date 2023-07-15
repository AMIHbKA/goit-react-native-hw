import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable, TouchableOpacity, View } from "react-native";
import { CreatePostsScreen } from "../../Screens/CreatePostsScreen/CreatePostsScreen";
import { LoginScreen } from "../../Screens/LoginScreen/LoginScreen";
import { PostsScreen } from "../../Screens/PostsScreen/PostsScreen";
import { AddIcon, GridIcon, UserIcon } from "../UI/icons";

const Tabs = createBottomTabNavigator();

const iconStyles = {
  width: 70,
  height: 40,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 50,
};

export const BottomNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        initialRouteName="Posts"
        name="TabPosts"
        component={PostsScreen}
        options={({ navigation }) => ({
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              onPress={() => navigation.navigate("Posts")}
            />
          ),
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                ...iconStyles,
                backgroundColor: focused ? "#FF6C00" : "transparent",
              }}
            >
              <GridIcon stroke={focused ? "#fff" : "#4d4d4d"} fill="none" />
            </View>
          ),
        })}
        // options={{
        //   tabBarIcon: ({ focused }) => (
        //     <View
        //       style={{
        //         ...iconStyles,
        //         backgroundColor: focused ? "#FF6C00" : "transparent",
        //       }}
        //     >
        //       <GridIcon stroke={focused ? "#fff" : "#4d4d4d"} fill="none" />
        //     </View>
        //   ),
        // }}
      />
      <Tabs.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                ...iconStyles,
                backgroundColor: focused ? "#FF6C00" : "transparent",
              }}
            >
              <AddIcon fill={focused ? "#fff" : "#4d4d4d"} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                ...iconStyles,
                backgroundColor: focused ? "#FF6C00" : "transparent",
              }}
            >
              <UserIcon stroke={focused ? "#fff" : "#4d4d4d"} />
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
