import { useFooter } from "@/contexts/FooterContext";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFooter,
  BottomSheetFooterProps,
} from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface BottomSheetWrapperProps {
  children: React.ReactNode;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  sheetContent: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentWrapper: {
    flex: 1,
  },
  bottomSheetBackground: {
    backgroundColor: "#fff",
  },
  handleIndicator: {
    backgroundColor: "#999",
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
});

const CustomFooterComponent: React.FC<
  BottomSheetFooterProps & { footerContent: React.ReactNode }
> = ({ animatedFooterPosition, footerContent }) => {
  const { bottom: bottomSafeArea } = useSafeAreaInsets();

  return (
    <BottomSheetFooter
      bottomInset={bottomSafeArea}
      animatedFooterPosition={animatedFooterPosition}
    >
      <View style={styles.footer}>{footerContent}</View>
    </BottomSheetFooter>
  );
};

export default function BottomSheetWrapper({
  children,
}: BottomSheetWrapperProps) {
  const navigation = useNavigation();
  const { footer } = useFooter();
  const snapPoints = useMemo(() => ["50%", "90%"], []);

  const handleSheetChanges = useCallback(
    (index: number) => {
      console.log("Bottom sheet index:", index);
      if (index === -1) {
        // Sheet is fully closed, navigate back to main app
        navigation.goBack();
      }
    },
    [navigation]
  );

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
        pressBehavior="close"
      />
    ),
    []
  );

  return (
    <View style={styles.container}>
      <BottomSheet
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.bottomSheetBackground}
        handleIndicatorStyle={styles.handleIndicator}
        enableDynamicSizing={false}
        footerComponent={(props: BottomSheetFooterProps) => (
          <CustomFooterComponent {...props} footerContent={footer} />
        )}
      >
        <View style={styles.sheetContent}>
          <View style={styles.contentWrapper}>{children}</View>
        </View>
      </BottomSheet>
    </View>
  );
}
