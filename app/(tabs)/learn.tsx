import ScreenTitle from "@/components/text/ScreenTitle";
import { useCustomTheme } from "@/context/CustomThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Learn() {
  const router = useRouter();
  const { theme } = useCustomTheme();

  return (
    <SafeAreaView className="flex-1">
      <ScreenTitle title="Learn words" />
      <View className="mt-6 px-6">
        <Pressable
          onPress={() => router.push("/story")}
          accessibilityRole="button"
          accessibilityLabel="Learn new words through passages"
          className="rounded-xl border-hairline px-6 py-8 mb-4 flex-row items-center"
          style={{
            backgroundColor: theme.cardBackground,
            borderColor: theme.borderColor,
          }}
        >
          <Ionicons
            name="book-outline"
            size={48}
            color="#4B5563"
            className="mr-6"
          />
          <View className="flex-1">
            <Text
              className="text-lg font-interBold mb-2"
              style={{ color: theme.text }}
            >
              Learn through passages
            </Text>
            <Text className="font-inter" style={{ color: theme.subtitleText }}>
              Understand new words in context by reading sentences
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
