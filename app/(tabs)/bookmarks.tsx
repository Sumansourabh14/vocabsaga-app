import { fetchBookmarks, updateBookmarks } from "@/services/bookmarking";
import { BookmarkedWord } from "@/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

dayjs.extend(relativeTime);

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState<BookmarkedWord[]>([]);

  const getBookmarks = async () => {
    const res = await fetchBookmarks();
    setBookmarks(res);
  };

  const removeBookmark = async (id: string, word: string) => {
    try {
      const updatedBookmarks = bookmarks.filter((b) => b.id !== id);
      setBookmarks(updatedBookmarks);
      await updateBookmarks(updatedBookmarks);

      Toast.show({
        type: "info",
        text1: "Removed from bookmarks",
        text2: word,
      });
    } catch (error) {
      console.log("Error removing bookmark:", error);
      Toast.show({
        type: "error",
        text1: "Failed to remove bookmark",
        text2: word,
      });
    }
  };

  useEffect(() => {
    getBookmarks();
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <Text className="text-4xl font-playfairBold text-center mt-8 mb-4">
        Bookmarks
      </Text>
      <Link href={`/story`} className="underline text-center mb-4 font-inter">
        Learn more words!
      </Link>

      <FlatList
        data={bookmarks.reverse()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-1 m-2 rounded-lg bg-zinc-800 px-4 py-6 relative">
            <Pressable
              className="absolute top-2 right-2"
              onPress={() => removeBookmark(item.id, item.word)}
            >
              <Ionicons name="bookmark" size={24} color="white" />
            </Pressable>
            <Text className="text-xl font-interBold text-white">
              {item.word}
            </Text>
            <Text className="text-sm text-neutral-400 mt-2">
              {dayjs(item.createdAt).fromNow()}
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
    </SafeAreaView>
  );
}
