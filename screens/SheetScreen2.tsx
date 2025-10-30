import { useFooter } from "@/contexts/FooterContext";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { useAppNavigation } from "@/hooks/useAppNavigation";

export default function SheetScreen2() {
  const { goBack, navigateToParent } = useAppNavigation();
  const { setFooter } = useFooter();

  useFocusEffect(
    useCallback(() => {
      setFooter(
        <View style={styles.footer}>
          <Text style={styles.footerText}>Sheet Screen 2 Footer</Text>
          <Button
            title="Custom Footer Action"
            onPress={() => alert("Footer action from Sheet Screen 2!")}
          />
        </View>
      );
    }, [setFooter])
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Sheet Screen 2</Text>
        <Text style={styles.subtitle}>
          Second screen in the bottom sheet stack
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Navigation Options:</Text>
          <Text style={styles.cardText}>• Tap header back button</Text>
          <Text style={styles.cardText}>• Swipe from left edge</Text>
          <Text style={styles.cardText}>• Device back button (Android)</Text>
          <Text style={styles.cardText}>• navigation.goBack()</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Go Back" onPress={() => goBack()} />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Navigate to Profile (Full Screen)"
            onPress={() => {
              console.log("Navigating from Sheet2 to Profile");
              navigateToParent("Profile");
            }}
          />
        </View>

        <View style={styles.detailsCard}>
          <Text style={styles.cardTitle}>About This Setup:</Text>
          <Text style={styles.detailText}>
            This is a native stack navigator inside a Gorhom Bottom Sheet. The
            main app has its own navigator for full-screen routes (Home,
            Profile), and this bottom sheet contains a separate stack navigator
            for sheet-only screens. All gestures work natively!
          </Text>
        </View>

        <View style={styles.featureBox}>
          <Text style={styles.featureTitle}>✨ What Works:</Text>
          <Text style={styles.featureItem}>🔄 Stack navigation in sheet</Text>
          <Text style={styles.featureItem}>👆 Native swipe gestures</Text>
          <Text style={styles.featureItem}>⬅️ Native back button</Text>
          <Text style={styles.featureItem}>📱 Custom footers</Text>
          <Text style={styles.featureItem}>⬇️ Swipe down to close</Text>
          <Text style={styles.featureItem}>🎨 Full navigation history</Text>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#2c3e50",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f0f8ff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: "#4a90e2",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2c3e50",
  },
  cardText: {
    fontSize: 14,
    marginVertical: 3,
    color: "#34495e",
  },
  buttonContainer: {
    marginVertical: 15,
  },
  detailsCard: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  detailText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#555",
  },
  featureBox: {
    backgroundColor: "#e8f5e9",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2e7d32",
  },
  featureItem: {
    fontSize: 14,
    marginVertical: 4,
    color: "#388e3c",
  },
  footer: {
    padding: 15,
    backgroundColor: "#d1ecf1",
    borderTopWidth: 1,
    borderTopColor: "#bee5eb",
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#0c5460",
    marginBottom: 8,
  },
});
