import { useCustomTheme } from "@/context/CustomThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Pressable } from "react-native";

type BookmarkBtnProps = {
  isBookmarked: boolean;
  handleBookmarking: () => void;
};

export default function BookmarkBtn({
  isBookmarked,
  handleBookmarking,
}: BookmarkBtnProps) {
  const theme = useCustomTheme();

  return (
    <Pressable onPress={handleBookmarking}>
      <Ionicons
        name={isBookmarked ? "bookmark" : "bookmark-outline"}
        size={28}
        color={theme.iconColor}
      />
    </Pressable>
  );
}
