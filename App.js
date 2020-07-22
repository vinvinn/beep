import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/home.js";
import RoomsScreen from "./screens/rooms.js";
import RoomScreen from "./screens/room.js";

const FBLoginButton = require("./components/FBLoginButton.js");

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Rooms' component={RoomsScreen} />
      <Stack.Screen
        name='Room'
        component={RoomScreen}
        options={({ route }) => ({ title: route.params.headerTitle })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
