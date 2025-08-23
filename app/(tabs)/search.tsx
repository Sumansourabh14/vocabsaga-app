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
        <View className="flex-1 border-hairline rounded-md flex-row items-center mr-2">
          <TextInput
            placeholder="Type any word here and search!"
            className="py-4 pl-2 font-inter flex-1"
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
            autoCapitalize="none"
            autoCorrect={false}
          />
          {text.length > 0 && (
            <Pressable onPress={() => onChangeText("")} className="mx-2">
              <Ionicons name="close-circle" size={22} color="gray" />
            </Pressable>
          )}
        </View>
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
