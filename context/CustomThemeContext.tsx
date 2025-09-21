import { Colors } from "@/constants/Colors";
import React, { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";

type ThemeMode = "light" | "dark" | "system";

type ThemeContextType = {
  theme: typeof Colors.light;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
};

const CustomThemeContext = createContext<ThemeContextType>({
  theme: Colors.light,
  themeMode: "system",
  setThemeMode: () => {},
});

export const CustomThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>("system");
  const colorScheme = useColorScheme();
  const theme =
    themeMode === "system"
      ? colorScheme === "dark"
        ? Colors.dark
        : Colors.light
      : Colors[themeMode];

  return (
    <CustomThemeContext.Provider value={{ theme, themeMode, setThemeMode }}>
      {children}
    </CustomThemeContext.Provider>
  );
};

export const useCustomTheme = () => useContext(CustomThemeContext);
