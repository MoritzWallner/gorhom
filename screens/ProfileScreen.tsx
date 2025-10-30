import { useFooter } from "@/contexts/FooterContext";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAppNavigation } from "@/hooks/useAppNavigation";

export default function ProfileScreen() {
  const { navigate } = useAppNavigation();
  const { setFooter } = useFooter();

  useFocusEffect(
    useCallback(() => {
      setFooter(
        <View style={styles.footer}>
          <Text style={styles.footerText}>Profile Screen Footer</Text>
          <Button
            title="Custom Action"
            onPress={() => alert("Footer button pressed!")}
          />
        </View>
      );
    }, [setFooter])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text style={styles.subtitle}>This is another full screen component</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Name: John Doe</Text>
        <Text style={styles.infoText}>Email: john@example.com</Text>
        <Text style={styles.infoText}>Role: Developer</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Navigate to Sheet Screen 2"
          onPress={() => {
            console.log("Navigating from Profile to Sheet Screen 2");
            navigate("SheetScreen2");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    marginBottom: 30,
  },
  infoContainer: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginVertical: 5,
  },
  buttonContainer: {
    marginVertical: 15,
    width: "80%",
  },
  footer: {
    padding: 20,
    backgroundColor: "#e8f4f8",
    borderTopWidth: 1,
    borderTopColor: "#b3d9e6",
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
});
