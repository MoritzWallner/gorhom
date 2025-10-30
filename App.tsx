import BottomSheetWrapper from "@/components/BottomSheetWrapper";
import { FooterProvider, useFooter } from "@/contexts/FooterContext";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Import screens
import HomeScreen from "@/screens/HomeScreen";
import ProfileScreen from "@/screens/ProfileScreen";
import SheetNavigator from "@/navigation/SheetNavigator";

const Stack = createNativeStackNavigator();

function AppContent() {
  const colorScheme = useColorScheme();
  const { footer } = useFooter();
  const [currentRoute, setCurrentRoute] = React.useState<string | undefined>();

  // Track current route to determine if we should show footer at app level
  const isModalRoute = currentRoute === "BottomSheetModal";

  return (
    <>
      <NavigationContainer
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        onStateChange={(state) => {
          // Get the current route name
          const route = state?.routes[state.index];
          setCurrentRoute(route?.name);
        }}
      >
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            headerLeft: ({ canGoBack }) =>
              canGoBack ? (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ paddingLeft: 8 }}
                >
                  <Ionicons name="arrow-back" size={24} color="#007AFF" />
                </TouchableOpacity>
              ) : null,
            headerBackTitleVisible: false,
          })}
        >
          {/* Full screen routes */}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ title: "Profile" }}
          />

          {/* Bottom sheet modal with nested navigator */}
          <Stack.Screen
            name="BottomSheetModal"
            options={{
              presentation: "transparentModal",
              headerShown: false,
              animation: "slide_from_bottom",
            }}
          >
            {() => (
              <BottomSheetWrapper>
                <SheetNavigator />
              </BottomSheetWrapper>
            )}
          </Stack.Screen>
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
      {/* Only show footer for non-modal routes - modal routes render footer inside BottomSheetWrapper */}
      {footer && !isModalRoute && (
        <View style={styles.footerContainer}>{footer}</View>
      )}
      <View
        style={{
          position: "absolute",
          top: 100,
          right: 20,
          borderColor: "#f00",
          borderWidth: 1,
          width: 60,
          height: 50,
          backgroundColor: "red",
          zIndex: 9999,
        }}
      />
    </>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={styles.root}>
      <FooterProvider>
        <AppContent />
      </FooterProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
