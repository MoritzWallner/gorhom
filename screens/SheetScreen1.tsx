import { useFooter } from "@/contexts/FooterContext";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { useAppNavigation } from "@/hooks/useAppNavigation";

export default function SheetScreen1() {
  const navigation = useNavigation();
  const { navigateToParent } = useAppNavigation();
  const { setFooter } = useFooter();
  const [count, setCount] = React.useState(0);

  useFocusEffect(
    useCallback(() => {
      setFooter(
        <View style={styles.footer}>
          <Text style={styles.footerText}>Sheet Screen 1 Footer</Text>
        </View>
      );
    }, [setFooter])
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.title}>Sheet Screen 1</Text>
      <Text style={styles.subtitle}>
        Inside bottom sheet with native stack navigation
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>✨ Features:</Text>
        <Text style={styles.cardText}>✓ Single main navigator</Text>
        <Text style={styles.cardText}>
          ✓ Stack navigator inside bottom sheet
        </Text>
        <Text style={styles.cardText}>✓ Native header with back button</Text>
        <Text style={styles.cardText}>✓ Swipe down to close sheet</Text>
        <Text style={styles.cardText}>✓ Swipe to go back between screens</Text>
        <Text style={styles.cardText}>✓ Custom footer support</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Navigate to Sheet Screen 2"
          onPress={() => {
            console.log("Navigating from Sheet1 to Sheet2");
            navigation.navigate("SheetScreen2" as never);
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to Profile (Full Screen)"
          onPress={() => {
            console.log("Navigating to Profile from Sheet1");
            navigateToParent("Profile");
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="set footer"
          onPress={() => {
            setCount(count + 1);
            setFooter(
              <View style={styles.footer}>
                <Text style={styles.footerText}>{count}</Text>
              </View>
            );
          }}
        />
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Try navigating to Screen 2. It will stay within the same bottom sheet.
          You can use the back button or swipe to go back!
        </Text>
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
    paddingBottom: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    marginVertical: 3,
    color: "#333",
  },
  buttonContainer: {
    marginVertical: 15,
  },
  infoBox: {
    backgroundColor: "#e8f4f8",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  infoText: {
    fontSize: 13,
    color: "#0066cc",
    textAlign: "center",
  },
  footer: {
    padding: 15,
    backgroundColor: "#fff3cd",
    borderTopWidth: 1,
    borderTopColor: "#ffc107",
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#856404",
  },
});
