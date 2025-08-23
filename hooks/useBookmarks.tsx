import { fetchBookmarks } from "@/services/bookmarking";
import { BookmarkedWord } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";

export default function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<BookmarkedWord[]>([]);

  const loadBookmarksAndUpdateState = async () => {
    const stored = await fetchBookmarks();
    setBookmarks(stored);
  };

  useEffect(() => {
    loadBookmarksAndUpdateState();
  }, []);

  const isBookmarked = (word: string) => bookmarks.some((b) => b.word === word);

  const toggleBookmark = async (word: string) => {
    try {
      let updatedBookmarks: BookmarkedWord[];

      if (isBookmarked(word)) {
        updatedBookmarks = bookmarks.filter((b) => b.word !== word);
        Toast.show({
          type: "info",
          text1: "Removed from bookmarks",
          text2: word,
        });
      } else {
        const payload: BookmarkedWord = {
          id: Date.now().toString(),
          word: word,
          createdAt: new Date().toISOString(),
        };
        updatedBookmarks = [...bookmarks, payload];
        Toast.show({
          type: "success",
          text1: "Added to bookmarks",
          text2: word,
        });
      }

      setBookmarks(updatedBookmarks);
      AsyncStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    } catch (error) {
      console.error(`Error toggling bookmark:`, error);
    }
  };

  return { bookmarks, toggleBookmark, isBookmarked };
}
