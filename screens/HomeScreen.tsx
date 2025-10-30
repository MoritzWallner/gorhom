import { useFooter } from "@/contexts/FooterContext";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAppNavigation } from "@/hooks/useAppNavigation";

export default function HomeScreen() {
  const { navigate } = useAppNavigation();
  const { setFooter } = useFooter();

  useFocusEffect(
    useCallback(() => {
      setFooter(
        <View style={styles.footer}>
          <Text style={styles.footerText}>Home Screen Footer</Text>
        </View>
      );
    }, [setFooter])
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Home Screen</Text>
        <Text style={styles.subtitle}>Full screen with native navigation</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Full Screen Navigation:</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Go to Profile (Full Screen)"
              onPress={() => navigate("Profile")}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bottom Sheet Navigation:</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Open Sheet Screen 1"
              onPress={() => {
                console.log("Opening Sheet Screen 1");
                navigate("SheetScreen1");
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Open Sheet Screen 2"
              onPress={() => {
                console.log("Opening Sheet Screen 2");
                navigate("SheetScreen2");
              }}
            />
          </View>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>✨ Architecture:</Text>
          <Text style={styles.infoText}>
            • Main navigator for full-screen routes
          </Text>
          <Text style={styles.infoText}>
            • Nested stack inside bottom sheet
          </Text>
          <Text style={styles.infoText}>
            • Navigate within sheet with headers
          </Text>
          <Text style={styles.infoText}>• All native gestures work</Text>
          <Text style={styles.infoText}>• Custom footers on any screen</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 40,
  },
  section: {
    width: "100%",
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    color: "#333",
  },
  buttonContainer: {
    marginVertical: 8,
  },
  infoBox: {
    backgroundColor: "#f0f8ff",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    marginTop: 20,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2c3e50",
  },
  infoText: {
    fontSize: 14,
    marginVertical: 3,
    color: "#34495e",
  },
  footer: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#333",
  },
});
