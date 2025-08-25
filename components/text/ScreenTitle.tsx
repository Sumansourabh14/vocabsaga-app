import React from "react";
import { Text } from "react-native";

export default function ScreenTitle({ title }: { title: string }) {
  return (
    <Text className="text-4xl font-playfairBold text-center mt-4 py-4">
      {title}
    </Text>
  );
}
