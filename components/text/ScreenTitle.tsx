import { useCustomTheme } from "@/context/CustomThemeContext";
import React from "react";
import { Text } from "react-native";

export default function ScreenTitle({ title }: { title: string }) {
  const { theme } = useCustomTheme();

  return (
    <Text
      className="text-4xl font-playfairBold text-center py-4"
      style={{ color: theme.title }}
    >
      {title}
    </Text>
  );
}
