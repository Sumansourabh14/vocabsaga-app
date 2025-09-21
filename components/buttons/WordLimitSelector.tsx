import { wordOptions } from "@/constants/WordOptions";
import { useCustomTheme } from "@/context/CustomThemeContext";
import { Pressable, Text, View } from "react-native";

type WordLimitSelectorProps = {
  wordLimit: string;
  setWordLimit: (value: string) => void;
};

export default function WordLimitSelector({
  wordLimit,
  setWordLimit,
}: WordLimitSelectorProps) {
  const { theme } = useCustomTheme();

  return (
    <View className="flex-row items-center gap-2 my-8">
      {wordOptions.map((opt) => {
        const isSelected = wordLimit === opt.value;

        return (
          <Pressable
            key={opt.value}
            onPress={() => setWordLimit(opt.value)}
            className="px-6 py-2 rounded-lg border"
            style={{
              backgroundColor: isSelected ? theme.text : theme.cardBackground,
              borderColor: isSelected ? theme.text : theme.borderColor,
            }}
          >
            <Text
              className="text-sm"
              style={{
                color: isSelected ? theme.cardBackground : theme.text,
                fontFamily: isSelected
                  ? "Inter_18pt-Bold"
                  : "Inter_18pt-Regular",
              }}
            >
              {opt.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
