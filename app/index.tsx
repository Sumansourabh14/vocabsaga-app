import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkIfFirstLaunched = async () => {
      try {
        const res = await AsyncStorage.getItem("isFirstLaunch");
        if (res === null) {
          router.replace("/onboarding");
        } else {
          router.replace("/learn");
        }
      } catch (error) {
        console.error(`Error checking if first launched:`, error);
        router.replace("/learn");
      } finally {
        setIsLoading(false);
      }
    };

    checkIfFirstLaunched();
  }, [router]);

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-white justify-center items-center">
        <ActivityIndicator size="large" color="#000" />
      </SafeAreaView>
    );
  }

  return null;
}
