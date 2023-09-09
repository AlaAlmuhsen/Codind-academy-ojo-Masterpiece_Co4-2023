import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "./screens/StackScreens/Signin";
import Signup from "./screens/StackScreens/Signup";
import Explore from "./screens/TabScreens/Explore";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyProfile from "./screens/DrawerScreens/MyProfile";
import { Pressable } from "react-native";
import {
   SimpleLineIcons,
   Ionicons,
   MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();

function StackGroup() {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Signin"
            component={Signin}
            options={{
               headerShown: false,
            }}
         />
         <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
               // headerShown: false,
               title: "",
            }}
         />
         <Stack.Screen
            name="DrawerGroup"
            component={DrawerGroup}
            options={{
               headerShown: false,
               title: "",
            }}
         />
      </Stack.Navigator>
   );
}

const Drawer = createDrawerNavigator();

function DrawerGroup() {
   return (
      <Drawer.Navigator
         screenOptions={({ navigation }) => ({
            headerLeft: () => (
               <Pressable onPress={navigation.toggleDrawer}>
                  <SimpleLineIcons
                     name="menu"
                     size={24}
                     color="white"
                     style={{ paddingLeft: 10 }}
                  />
               </Pressable>
            ),
            headerRight: () => (
               <Pressable onPress={() => navigation.navigate("MyProfile")}>
                  <Ionicons
                     name="notifications"
                     size={24}
                     color="white"
                     style={{ paddingRight: 10 }}
                  />
               </Pressable>
            ),
            headerStyle: {
               backgroundColor: "#C83B3B",
            },
            headerTitleAlign: "center",
            headerTitle: "Ticket Master",
            headerTintColor: "white",
         })}
      >
         <Drawer.Screen name="TabGroup" component={TabGroup} />
         <Drawer.Screen name="MyProfile" component={MyProfile} />
      </Drawer.Navigator>
   );
}

const Tab = createBottomTabNavigator();

function TabGroup() {
   return (
      <Tab.Navigator
         screenOptions={({ route }) => ({
            // headerTitleAlign: "center",
            tabBarActiveTintColor: "#C83B3B",
            tabBarInactiveTintColor: "gray",
            tabBarIcon: ({ focused, color, size }) => {
               let iconName;
               if (route.name === "explore") {
                  iconName = focused ? "compass" : "compass-outline";
               } else if (route.name === "events") {
                  iconName = focused ? "ios-calendar" : "ios-calendar-outline";
               } else if (route.name === "tickets") {
                  iconName = focused
                     ? "ios-notifications"
                     : "notifications-outline";
                  return (
                     <MaterialCommunityIcons
                        name="ticket-confirmation"
                        size={size}
                        color={color}
                     />
                  );
               } else if (route.name === "favorite") {
                  iconName = focused ? "heart-sharp" : "heart-outline";
               }
               // You can return any component that you like here!
               return <Ionicons name={iconName} size={size} color={color} />;
            },

            headerShown: false,
            tabBarStyle: { height: 60, paddingBottom: 5 },
            tabBarLabelStyle: { fontSize: 12 },
         })}
      >
         <Tab.Screen name="explore" component={Explore} />
         <Tab.Screen name="events" component={Explore} />
         <Tab.Screen name="tickets" component={Explore} />
         <Tab.Screen name="favorite" component={Explore} />
      </Tab.Navigator>
   );
}

export default function Navigation() {
   return <StackGroup></StackGroup>;
}

// testmobile3@gmail.com
// Aa12345678#
