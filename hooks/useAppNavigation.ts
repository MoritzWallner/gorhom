import { useNavigation as useReactNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { useFooter } from "@/contexts/FooterContext";

type ScreenName = "Home" | "Profile" | "SheetScreen1" | "SheetScreen2";

export function useAppNavigation() {
  const navigation = useReactNavigation();
  const { setFooter } = useFooter();

  const navigate = useCallback(
    (screenName: ScreenName) => {
      // Clear footer before navigation
      setFooter(null);

      // Navigate to sheet screens via BottomSheetModal
      if (screenName === "SheetScreen1" || screenName === "SheetScreen2") {
        navigation.navigate("BottomSheetModal" as never, {
          screen: screenName,
        } as never);
      } else {
        // Navigate to regular screens directly
        navigation.navigate(screenName as never);
      }
    },
    [navigation, setFooter]
  );

  const goBack = useCallback(() => {
    setFooter(null);
    navigation.goBack();
  }, [navigation, setFooter]);

  const navigateToParent = useCallback(
    (screenName: ScreenName) => {
      setFooter(null);
      navigation.getParent()?.navigate(screenName as never);
    },
    [navigation, setFooter]
  );

  return {
    navigate,
    goBack,
    navigateToParent,
    canGoBack: navigation.canGoBack,
  };
}
