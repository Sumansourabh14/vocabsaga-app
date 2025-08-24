import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 justify-center px-6">
      <View className="flex-1 items-center justify-center">
        <View className="items-center">
          <Image
            source={require("@/assets/images/vocabsaga-full-light.png")}
            style={{ width: 300, height: 100, resizeMode: "contain" }}
          />

          <Text className="text-gray-700 text-center font-inter text-lg mb-8">
            Learn vocabulary in a way that sticks.
          </Text>
        </View>
      </View>

      <TouchableOpacity
        className="bg-black px-10 py-4 rounded-xl mb-4"
        onPress={() => router.push("/(tabs)/learn")}
      >
        <Text className="text-white text-2xl font-interBold text-center">
          Start Learning
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
