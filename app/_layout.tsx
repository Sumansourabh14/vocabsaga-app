import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";

const myTheme = {
  ...DarkTheme,
  colors: { ...DarkTheme.colors, primary: "#1b7a1b" },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={myTheme}>
      <Slot />
    </ThemeProvider>
  );
}
