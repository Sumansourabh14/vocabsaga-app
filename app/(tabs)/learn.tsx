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
      <ScreenTitle title="Home" />
      <View className="mt-8 px-6">
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
              className="text-xl font-interBold mb-2"
              style={{ color: theme.text }}
            >
              Learn through reading
            </Text>
            <Text className="font-inter" style={{ color: theme.subtitleText }}>
              Pick up new words naturally from real novel passages
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => router.push("/quote")}
          accessibilityRole="button"
          accessibilityLabel="Discover random quotes"
          className="rounded-xl border-hairline px-6 py-8 mb-4 flex-row items-center"
          style={{
            backgroundColor: theme.cardBackground,
            borderColor: theme.borderColor,
          }}
        >
          <Ionicons
            name="text-outline"
            size={48}
            color="#4B5563"
            className="mr-6"
          />
          <View className="flex-1">
            <Text
              className="text-xl font-interBold mb-2"
              style={{ color: theme.text }}
            >
              Read a random quote
            </Text>
            <Text className="font-inter" style={{ color: theme.subtitleText }}>
              A thoughtful line from literature, one at a time
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
