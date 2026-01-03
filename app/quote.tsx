import BackBtn from "@/components/iconButtons/BackBtn";
import { useCustomTheme } from "@/context/CustomThemeContext";
import { QUOTES_API_URL } from "@/data/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

type QuoteProps = {
  quote: string;
  book: string;
  author: string;
};

export default function Story() {
  const [quote, setQuote] = useState<QuoteProps | null>(null);
  const [loading, setLoading] = useState(false);
  const { theme } = useCustomTheme();

  const fetchRandomQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${QUOTES_API_URL}/api/v1/random`);
      const data = await res.json();
      setQuote(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRandom = () => {
    fetchRandomQuote();
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      className="px-8 relative"
    >
      <View className="mt-8 px-6 flex-row justify-between absolute left-0 top-10">
        <BackBtn />
      </View>

      {loading ? (
        <View className="items-center">
          <ActivityIndicator size="large" color={theme.text} />
          <Text
            className="mt-4 text-lg font-inter"
            style={{ color: theme.text }}
          >
            Fetching a quote…
          </Text>
        </View>
      ) : (
        quote && (
          <>
            <Text
              className="text-center text-2xl mb-8 font-inter"
              style={{ color: theme.text }}
            >
              “{quote.quote}”
            </Text>

            <Text
              className="text-center text-xl font-interBold"
              style={{ color: theme.text }}
            >
              {quote.book}
            </Text>

            <Text
              className="text-center text-xl font-inter"
              style={{ color: theme.text }}
            >
              {quote.author}
            </Text>

            <View className="flex-row gap-6 mt-8">
              <Pressable onPress={handleRandom}>
                <Ionicons name="shuffle" size={32} color={theme.iconColor} />
              </Pressable>
            </View>
          </>
        )
      )}
    </View>
  );
}
