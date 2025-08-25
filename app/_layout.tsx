import Ionicons from "@expo/vector-icons/Ionicons";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast, {
  BaseToast,
  InfoToast,
  ToastConfig,
} from "react-native-toast-message";
import "../global.css";

const myTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors },
};

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Inter_18pt-Bold": require("../assets/fonts/Inter_18pt-Bold.ttf"),
    "Inter_18pt-Regular": require("../assets/fonts/Inter_18pt-Regular.ttf"),
    "PlayfairDisplay-Regular": require("../assets/fonts/PlayfairDisplay-Regular.ttf"),
    "PlayfairDisplay-Bold": require("../assets/fonts/PlayfairDisplay-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const toastConfig: ToastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{
          backgroundColor: "#1c1c1e",
          borderLeftWidth: 0,
          borderRadius: 8,
          paddingHorizontal: 12,
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}
        text2Style={{ color: "#ccc", fontSize: 14 }}
        renderLeadingIcon={() => (
          <Ionicons
            name="checkmark-circle"
            size={32}
            color="#fff"
            style={{ marginTop: 8 }}
          />
        )}
      />
    ),
    info: (props) => (
      <InfoToast
        {...props}
        style={{
          backgroundColor: "#1c1c1e",
          borderLeftWidth: 0,
          borderRadius: 8,
          paddingHorizontal: 12,
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}
        text2Style={{ color: "#ccc", fontSize: 14 }}
        renderLeadingIcon={() => (
          <Ionicons
            name="remove-circle"
            size={32}
            color="#fff"
            style={{ marginTop: 8 }}
          />
        )}
      />
    ),
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={myTheme}>
        <SafeAreaView
          className="flex-1 bg-white"
          edges={["right", "bottom", "left"]}
        >
          <Slot />
          <Toast config={toastConfig} />
          <StatusBar style="dark" />
        </SafeAreaView>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
