import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

export default function BackBtn() {
  const router = useRouter();

  const handleBackNavigation = () => {
    router.back();
  };

  return (
    <Pressable onPress={handleBackNavigation}>
      <Ionicons name={"arrow-back"} size={28} />
    </Pressable>
  );
}
