import { fetchBookmarks } from "@/services/bookmarking";
import { BookmarkedWord } from "@/types";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState<BookmarkedWord[]>([]);

  const getBookmarks = async () => {
    const res = await fetchBookmarks();
    console.log({ res });
    setBookmarks(res);
  };

  useEffect(() => {
    getBookmarks();
  }, []);

  return (
    <View className="flex-1">
      <Text className="text-4xl font-playfairBold text-center mt-4">
        Bookmarks
      </Text>
      <Link href={`/story`} className="underline text-center mb-4">
        Story
      </Link>

      <FlatList
        data={bookmarks.reverse()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-1 m-2 rounded-lg bg-zinc-800 px-4 py-6">
            <Text className="text-xl font-interBold text-white">
              {item.word}
            </Text>
            <Text className="text-sm text-neutral-400 mt-2">
              {new Date(item.createdAt).toLocaleDateString()}
            </Text>
          </View>
        )}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{
          paddingHorizontal: 8,
          paddingVertical: 8,
        }}
        ListEmptyComponent={
          <Text className="text-center text-base text-neutral-500 mt-10">
            No words bookmarked yet.
          </Text>
        }
      />
    </View>
  );
}
