import { BookmarkedWord } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchBookmarks = async () => {
  try {
    const value = await AsyncStorage.getItem("bookmarks");
    if (value) {
      try {
        return JSON.parse(value);
      } catch (error) {
        console.log(`Error parsing bookmarks JSON:`, error);
        return [];
      }
    }
    return [];
  } catch (error) {
    console.log(`Error fetching bookmarks from user's device:`, error);
    return [];
  }
};

export const updateBookmarks = async (bookmarks: BookmarkedWord[]) => {
  try {
    const updatedBookmarks = JSON.stringify(bookmarks);
    await AsyncStorage.setItem("bookmarks", updatedBookmarks);
  } catch (error) {
    console.log("Error saving bookmarks:", error);
  }
};
