import { wordOptions } from "@/constants/WordOptions";
import { Pressable, Text, useColorScheme, View } from "react-native";

type WordLimitSelectorProps = {
  wordLimit: string;
  setWordLimit: (value: string) => void;
};

export default function WordLimitSelector({
  wordLimit,
  setWordLimit,
}: WordLimitSelectorProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View className="flex-row items-center gap-2 my-8">
      {wordOptions.map((opt) => {
        return (
          <Pressable
            key={opt.value}
            onPress={() => setWordLimit(opt.value)}
            className={`px-6 py-2 rounded-lg border ${
              wordLimit === opt.value
                ? isDark
                  ? "bg-white"
                  : "bg-black"
                : isDark
                  ? "border-gray-600"
                  : "border-gray-300"
            }`}
          >
            <Text
              className={`text-sm ${
                wordLimit === opt.value
                  ? isDark
                    ? "text-black font-interBold"
                    : "text-white font-interBold"
                  : isDark
                    ? "text-gray-200 font-inter"
                    : "text-gray-700 font-inter"
              }`}
            >
              {opt.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
