import { useCustomTheme } from "@/context/CustomThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";

export default function ThemeSelector() {
  const { theme, themeMode, setThemeMode } = useCustomTheme();
  const [visible, setVisible] = useState(false);

  const handleSelect = (mode: "light" | "dark" | "system") => {
    setThemeMode(mode);
    setVisible(false);
  };

  return (
    <View>
      <Pressable
        onPress={() => setVisible(true)}
        className="w-full p-4 py-6 border-b-hairline rounded"
        style={{ borderColor: theme.borderColor }}
      >
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Ionicons
              name="color-palette-outline"
              size={22}
              className="mr-2"
              color={theme.iconColor}
            />
            <Text
              className="font-interBold text-lg"
              style={{ color: theme.text }}
            >
              Theme:
            </Text>
          </View>
          <Text className="font-inter text-lg" style={{ color: theme.text }}>
            {themeMode.charAt(0).toUpperCase() + themeMode.slice(1)}
          </Text>
        </View>
      </Pressable>

      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => setVisible(false)}
        backdropColor={theme.cardBackground}
      >
        <View className="flex-1 justify-end bg-black/60">
          <View
            className="p-6 rounded-t-2xl"
            style={{ backgroundColor: theme.background }}
          >
            <Text
              className="text-lg mb-4 font-interBold"
              style={{ color: theme.title }}
            >
              Choose Theme
            </Text>

            <Pressable
              onPress={() => handleSelect("light")}
              className="flex-row items-center justify-between py-4"
            >
              <Text style={{ color: theme.text }} className="font-inter">
                Light
              </Text>
              {themeMode === "light" && (
                <Ionicons name="checkmark" size={20} color={theme.iconColor} />
              )}
            </Pressable>

            <Pressable
              onPress={() => handleSelect("dark")}
              className="flex-row items-center justify-between py-4"
            >
              <Text style={{ color: theme.text }} className="font-inter">
                Dark
              </Text>
              {themeMode === "dark" && (
                <Ionicons name="checkmark" size={20} color={theme.iconColor} />
              )}
            </Pressable>

            <Pressable
              onPress={() => handleSelect("system")}
              className="flex-row items-center justify-between py-4"
            >
              <Text style={{ color: theme.text }} className="font-inter">
                System Default
              </Text>
              {themeMode === "system" && (
                <Ionicons name="checkmark" size={20} color={theme.iconColor} />
              )}
            </Pressable>

            <Pressable
              onPress={() => setVisible(false)}
              className="p-4 rounded mt-4"
              style={{ backgroundColor: theme.title }}
            >
              <Text
                className="text-center font-interBold"
                style={{ color: theme.cardBackground }}
              >
                Cancel
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
