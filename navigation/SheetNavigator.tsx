import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import SheetScreen1 from "@/screens/SheetScreen1";
import SheetScreen2 from "@/screens/SheetScreen2";

const SheetStack = createNativeStackNavigator();

export default function SheetNavigator() {
  return (
    <SheetStack.Navigator
      screenOptions={({ navigation }) => ({
        headerShown: true,
        animation: "slide_from_right",
        headerBackTitleVisible: false,
        headerLeft: ({ canGoBack }) =>
          canGoBack ? (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 8 }}
            >
              <Ionicons name="arrow-back" size={24} color="#007AFF" />
            </TouchableOpacity>
          ) : null,
      })}
    >
      <SheetStack.Screen
        name="SheetScreen1"
        component={SheetScreen1}
        options={{ title: "Sheet Screen 1" }}
      />
      <SheetStack.Screen
        name="SheetScreen2"
        component={SheetScreen2}
        options={{ title: "Sheet Screen 2" }}
      />
    </SheetStack.Navigator>
  );
}
