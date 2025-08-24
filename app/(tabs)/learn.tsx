import ScreenTitle from "@/components/text/ScreenTitle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Learn() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1">
      <ScreenTitle title="Learn words" />
      <View className="mt-6 px-6">
        <Pressable
          onPress={() => router.push("/story")}
          className="bg-white rounded-2xl shadow-md p-8 mb-4 flex-row items-center"
        >
          <Ionicons
            name="book-outline"
            size={48}
            color="#4B5563"
            className="mr-6"
          />
          <View className="flex-1">
            <Text className="text-lg font-interBold mb-2">
              Through passages
            </Text>
            <Text className="text-gray-600 font-inter">
              Learn new words in context by reading sentences.
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
