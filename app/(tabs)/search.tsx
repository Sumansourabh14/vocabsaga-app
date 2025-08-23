import ScreenTitle from "@/components/text/ScreenTitle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  const [text, onChangeText] = useState("");
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1">
      <ScreenTitle title="Find a word" />
      <View className="px-4 py-4 flex-row items-center">
        <TextInput
          placeholder="Which word are you looking for?"
          className="border-hairline rounded-md px-4 py-4 font-inter flex-1 mr-2"
          value={text}
          onChangeText={onChangeText}
          returnKeyType="search"
          onSubmitEditing={() => {
            if (text.length > 0) {
              router.navigate({
                pathname: "/word/[word]",
                params: { word: text.toLowerCase() },
              });
            }
          }}
        />
        <Pressable
          onPress={() =>
            router.navigate({
              pathname: "/word/[word]",
              params: { word: text.toLowerCase() },
            })
          }
          disabled={text.length === 0}
          className={text.length === 0 ? "opacity-40" : "opacity-100"}
          accessibilityLabel="Search word"
          accessibilityRole="button"
        >
          <Ionicons name="search-sharp" size={32} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
