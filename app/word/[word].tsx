import BackBtn from "@/components/iconButtons/BackBtn";
import WordDeepMeanings from "@/components/WordDeepMeanings";
import useFetchWordMeaning from "@/hooks/useFetchWordMeaning";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Word() {
  const { word } = useLocalSearchParams<{ word: string }>();
  const { data, isFetching, error } = useFetchWordMeaning(word);
  console.log({ data, isFetching });

  if (!word) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <Text className="text-lg text-neutral-400">No word provided</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="mt-8 px-6">
        <BackBtn />
      </View>
      <Text className="text-6xl font-playfairBold text-center mb-4">
        {word}
      </Text>
      {isFetching && <ActivityIndicator size="large" color="white" />}
      {error && (
        <Text className="text-red-400 text-center mt-4">
          Failed to load meaning
        </Text>
      )}

      {data !== undefined &&
        !isFetching &&
        data.map((word, index) => (
          <WordDeepMeanings
            key={index}
            word={word.word}
            meanings={word.meanings}
            phonetics={word.phonetics}
            origin={word.origin}
            phonetic={word.phonetic}
          />
        ))}
    </SafeAreaView>
  );
}
