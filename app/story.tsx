import rawPassages from "@/data/passages/p1.json";
import { BookmarkedWord, WordPassage } from "@/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Modal, Pressable, StyleSheet, Switch, Text, View } from "react-native";
import Toast from "react-native-toast-message";

const passages: WordPassage[] = rawPassages;

export default function Story() {
  const [current, setCurrent] = useState(
    Math.floor(Math.random() * passages.length)
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [wordLimit, setWordLimit] = useState("15");
  const [bookmarks, setBookmarks] = useState<BookmarkedWord[]>([]);
  const data = passages[current];

  const handleRandom = () => {
    if (passages.length === 0) return;

    const randomIndex = Math.floor(Math.random() * passages.length);
    setCurrent(randomIndex);
  };

  const highlightWordInPassage = (text: string, word: string) => {
    const base = word.toLowerCase();
    const forms = [
      base,
      `${base}s`,
      `${base}es`,
      `${base}d`,
      `${base}ed`,
      `${base}ing`,
      base.endsWith("e") ? `${base.slice(0, -1)}ing` : "",
      base.endsWith("e") ? `${base}d` : "",
    ].filter((form): form is string => !!form); // Type guard to ensure string

    const escapedForms = forms.map((w) =>
      w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    );
    const regex = new RegExp(`\\b(${escapedForms.join("|")})\\b`, "gi");

    return text.split(regex).map((part, index) =>
      index % 2 === 1 ? (
        <Text key={index} className="text-[#1b7a1b] font-playfairBold">
          {part}
        </Text>
      ) : (
        <Text key={index}>{part}</Text>
      )
    );
  };

  const isBookmarked = bookmarks.some((b) => b.word === data.word);

  const handleBookmarking = async () => {
    try {
      let updatedBookmarks: BookmarkedWord[];

      if (isBookmarked) {
        updatedBookmarks = bookmarks.filter((b) => b.word !== data.word);
        Toast.show({
          type: "info",
          text1: "Removed from bookmarks",
          text2: data.word,
        });
      } else {
        const payload: BookmarkedWord = {
          id: Date.now().toString(),
          word: data.word,
          createdAt: new Date().toISOString(),
        };
        updatedBookmarks = [...bookmarks, payload];
        Toast.show({
          type: "success",
          text1: "Added to bookmarks",
          text2: data.word,
        });
      }

      setBookmarks(updatedBookmarks);
      AsyncStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    } catch (error) {
      console.error(`Error handling bookmarking a word: `, error);
    }
  };

  const handleFetchBookmarks = async () => {
    try {
      const res = await AsyncStorage.getItem("bookmarks");
      if (res !== null) {
        console.log(JSON.parse(res));
        setBookmarks(JSON.parse(res));
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchBookmarks();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      className="px-8 bg-[#101010]"
    >
      <Text
        className={`
    ${data.difficulty_level === "easy" ? "bg-green-100 text-green-800" : ""}
    ${data.difficulty_level === "medium" ? "bg-orange-100 text-orange-800" : ""}
    ${data.difficulty_level === "hard" ? "bg-red-100 text-red-800" : ""}
    ${!["easy", "medium", "hard"].includes(data.difficulty_level) ? "bg-gray-100 text-gray-800" : ""}
    text-sm px-2 py-1 rounded-sm font-inter
  `}
      >
        {data.difficulty_level.toUpperCase()}
      </Text>
      <View className="flex-row items-center mt-2 mb-6">
        <Text className="text-white font-inter">Detailed</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#1b7a1b" }}
          thumbColor={wordLimit ? "#fff" : "#fff"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() =>
            setWordLimit((prev) => (prev === "30" ? "15" : "30"))
          }
          value={wordLimit === "30"}
        />
      </View>
      <Text className="text-center text-2xl text-gray-200 mb-8 font-playfair">
        {highlightWordInPassage(data.passages[wordLimit], data.word)}
      </Text>
      <View className="flex flex-row gap-6">
        <Pressable onPress={handleRandom}>
          <Ionicons name="shuffle" size={32} color="#FFF" />
        </Pressable>
        <Pressable onPress={() => setModalVisible(true)}>
          <Ionicons name="eye" size={32} color="#FFF" />
        </Pressable>
        <Pressable onPress={handleBookmarking}>
          <Ionicons
            name={isBookmarked ? "bookmark" : "bookmark-outline"}
            size={32}
            color="#FFF"
          />
        </Pressable>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text className="text-white mb-4 text-4xl font-playfairBold">
              {data.word}
            </Text>
            <Text className="text-white mb-8 text-xl font-inter">
              {data.word_meaning}
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle} className="font-interBold text-sm">
                Done
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#000",
    borderRadius: 8,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 8,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#FFFFFF",
  },
  textStyle: {
    color: "black",
    textAlign: "center",
  },
});
