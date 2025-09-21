import { useCustomTheme } from "@/context/CustomThemeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const { theme, themeMode } = useCustomTheme();

  const resolvedTheme =
    themeMode === "system" ? (colorScheme ?? "light") : themeMode;

  return (
    <SafeAreaView className="flex-1 justify-center px-6">
      <View className="flex-1 items-center justify-center">
        <View className="items-center">
          <Image
            source={
              resolvedTheme === "dark"
                ? require("@/assets/images/vocabsaga-full-dark.png")
                : require("@/assets/images/vocabsaga-full-light.png")
            }
            style={{ width: 300, height: 100, resizeMode: "contain" }}
          />

          <Text
            className="text-center font-inter text-lg mb-8"
            style={{ color: theme.title }}
          >
            Learn vocabulary in a way that sticks.
          </Text>
        </View>
      </View>

      <TouchableOpacity
        className="px-10 py-4 rounded-lg mb-4"
        style={{ backgroundColor: theme.title }}
        onPress={async () => {
          await AsyncStorage.setItem("isFirstLaunch", "false");
          router.replace("/learn");
        }}
      >
        <Text
          className="text-2xl font-interBold text-center"
          style={{ color: theme.cardBackground }}
        >
          Start Learning
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
