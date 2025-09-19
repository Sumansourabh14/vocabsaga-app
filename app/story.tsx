import WordLimitSelector from "@/components/buttons/WordLimitSelector";
import BackBtn from "@/components/iconButtons/BackBtn";
import { useCustomTheme } from "@/context/CustomThemeContext";
import rawPassages from "@/data/passages/p1.json";
import { BookmarkedWord, WordPassage } from "@/types";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";

const passages: WordPassage[] = rawPassages;

const difficultyColors: Record<string, string> = {
  easy: "bg-green-100 text-green-800",
  medium: "bg-orange-100 text-orange-800",
  hard: "bg-red-100 text-red-800",
};

export default function Story() {
  const [current, setCurrent] = useState(
    Math.floor(Math.random() * passages.length)
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [wordLimit, setWordLimit] = useState("15");
  const [bookmarks, setBookmarks] = useState<BookmarkedWord[]>([]);
  const data = passages[current];
  const router = useRouter();
  const theme = useCustomTheme();

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
        <Text key={index} className="text-[#1b7a1b] font-interBold">
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
      className="px-8 relative"
    >
      <View className="mt-8 px-6 flex-row justify-between absolute left-0 top-10">
        <BackBtn />
      </View>
      <Text
        className={`
    ${difficultyColors[data.difficulty_level] || "bg-gray-100 text-gray-800"}
    text-sm px-2 py-1 rounded-md font-inter
  `}
      >
        {data.difficulty_level.slice(0, 1).toUpperCase()}
        {data.difficulty_level.slice(1)}
      </Text>

      <WordLimitSelector wordLimit={wordLimit} setWordLimit={setWordLimit} />

      <Text
        className="text-center text-2xl mb-8 font-inter"
        style={{ color: theme.text }}
      >
        {highlightWordInPassage(data.passages[wordLimit], data.word)}
      </Text>
      <View className="flex flex-row gap-6">
        <Pressable onPress={handleRandom}>
          <Ionicons name="shuffle" size={32} color={theme.iconColor} />
        </Pressable>
        <Pressable onPress={() => setModalVisible(true)}>
          <Ionicons name="eye" size={32} color={theme.iconColor} />
        </Pressable>
        <Pressable onPress={handleBookmarking}>
          <Ionicons
            name={isBookmarked ? "bookmark" : "bookmark-outline"}
            size={32}
            color={theme.iconColor}
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
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Ionicons name="close-circle-outline" size={20} />
            </Pressable>
            <Text className="py-4 text-4xl font-playfairBold text-center">
              {data.word}
            </Text>
            <Text className="mb-8 text-lg font-inter text-center">
              {data.word_meaning}
            </Text>
            <Pressable
              onPress={() =>
                router.push({
                  pathname: `/word/[word]`,
                  params: {
                    word: data.word,
                  },
                })
              }
              className="flex-row gap-2 border-hairline rounded-lg px-4 py-2 items-center"
            >
              <Text className="font-inter text-sm">See more</Text>
              <Ionicons name="arrow-forward-circle" size={20} />
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
    backgroundColor: "#fff",
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
    position: "absolute",
    right: 8,
    top: 8,
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
