import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import Toast, {
  BaseToast,
  InfoToast,
  ToastConfig,
} from "react-native-toast-message";
import "../global.css";

const myTheme = {
  ...DarkTheme,
  colors: { ...DarkTheme.colors, primary: "#1b7a1b", card: "#101010" },
};

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
          borderRadius: 10,
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}
        text2Style={{ color: "#ccc", fontSize: 14 }}
      />
    ),
    info: (props) => (
      <InfoToast
        {...props}
        style={{
          backgroundColor: "#1c1c1e",
          borderLeftWidth: 0,
          borderRadius: 10,
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}
        text2Style={{ color: "#ccc", fontSize: 14 }}
      />
    ),
  };

  return (
    <ThemeProvider value={myTheme}>
      <Slot />
      <Toast config={toastConfig} />
    </ThemeProvider>
  );
}
