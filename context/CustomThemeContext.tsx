import { Colors } from "@/constants/Colors";
import React, { createContext, useContext } from "react";
import { useColorScheme } from "react-native";

const CustomThemeContext = createContext(Colors.light);

export const CustomThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme ? Colors[colorScheme] : Colors.light;

  return (
    <CustomThemeContext.Provider value={theme}>
      {children}
    </CustomThemeContext.Provider>
  );
};

export const useCustomTheme = () => useContext(CustomThemeContext);
