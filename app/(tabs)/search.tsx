import ScreenTitle from "@/components/text/ScreenTitle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
  const [text, onChangeText] = useState("");
  const router = useRouter();

  console.log({ text });

  return (
    <SafeAreaView className="flex-1">
      <ScreenTitle title="Search" />
      <Link href={`/story`} className="underline text-center mb-4 font-inter">
        Learn more words!
      </Link>
      <View className="px-4">
        <TextInput
          placeholder="Enter"
          className="border-hairline rounded-md px-4 py-4 font-inter"
          value={text}
          onChangeText={onChangeText}
        />
        <Pressable
          onPress={() =>
            router.navigate({
              pathname: "/word/[word]",
              params: { word: text },
            })
          }
        >
          <Ionicons name="search-sharp" size={32} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
