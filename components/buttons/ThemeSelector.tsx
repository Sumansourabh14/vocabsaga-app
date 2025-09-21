import { useCustomTheme } from "@/context/CustomThemeContext";
import React, { useState } from "react";
import { Button, Modal, Pressable, Text, View } from "react-native";

export default function ThemeSelector() {
  const { themeMode, setThemeMode } = useCustomTheme();
  const [visible, setVisible] = useState(false);

  const handleSelect = (mode: "light" | "dark" | "system") => {
    setThemeMode(mode);
    setVisible(false);
  };

  return (
    <View>
      {/* Trigger row/button */}
      <Pressable onPress={() => setVisible(true)}>
        <Text>Theme: {themeMode}</Text>
      </Pressable>

      {/* Modal popup */}
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white dark:bg-gray-900 p-6 rounded-t-2xl">
            <Text className="text-lg font-bold mb-4">Choose Theme</Text>

            <Pressable onPress={() => handleSelect("light")} className="p-3">
              <Text>🌞 Light</Text>
            </Pressable>
            <Pressable onPress={() => handleSelect("dark")} className="p-3">
              <Text>🌙 Dark</Text>
            </Pressable>
            <Pressable onPress={() => handleSelect("system")} className="p-3">
              <Text>⚙️ System Default</Text>
            </Pressable>

            <Button title="Cancel" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
