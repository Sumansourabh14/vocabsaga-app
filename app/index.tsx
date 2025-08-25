import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/learn");
  }, [router]);

  return (
    <SafeAreaView
      className="flex-1 bg-white justify-center items-center"
      edges={["right", "bottom", "left"]}
    >
      <ActivityIndicator size="large" color="#000" />
    </SafeAreaView>
  );
}
