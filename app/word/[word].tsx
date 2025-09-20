import BackBtn from "@/components/iconButtons/BackBtn";
import BookmarkBtn from "@/components/iconButtons/BookmarkBtn";
import WordDeepMeanings from "@/components/WordDeepMeanings";
import { useCustomTheme } from "@/context/CustomThemeContext";
import useBookmarks from "@/hooks/useBookmarks";
import useFetchWordMeaning from "@/hooks/useFetchWordMeaning";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Word() {
  const { word } = useLocalSearchParams<{ word: string }>();
  const { data, isFetching, error } = useFetchWordMeaning(word);
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const theme = useCustomTheme();

  const bookmarked = isBookmarked(word);

  if (!word) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <Text className="text-lg text-neutral-400">No word provided</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="mt-8 px-6 flex-row justify-between">
          <BackBtn />
          <BookmarkBtn
            handleBookmarking={() => toggleBookmark(word)}
            isBookmarked={bookmarked}
          />
        </View>
        <Text
          className="text-6xl font-playfairBold text-center p-4"
          style={{ color: theme.title }}
        >
          {word}
        </Text>
        {isFetching && (
          <View className="flex-1 justify-center items-center mt-8">
            <ActivityIndicator size="large" color={theme.title} />
            <Text
              className="text-center text-md font-inter mt-4"
              style={{ color: theme.text }}
            >
              Looking up this word...
            </Text>
          </View>
        )}
        {error && (
          <Text className="text-red-400 text-center mt-4 font-inter mt-8">
            Couldn&apos;t find definitions for this word
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
      </ScrollView>
    </SafeAreaView>
  );
}
