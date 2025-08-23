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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-3xl text-white font-bold">Bookmarks</Text>
      <Link href={`/story`} className="underline text-white">
        Story
      </Link>
      <FlatList
        data={bookmarks}
        renderItem={({ item }) => <Text>{item.word}</Text>}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No words.</Text>}
      />
    </View>
  );
}
