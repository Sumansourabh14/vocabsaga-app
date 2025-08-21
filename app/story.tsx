import rawPassages from "@/data/passages/p1.json";
import { WordPassage } from "@/types";
import { useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";

const passages: WordPassage[] = rawPassages;

export default function Story() {
  const [current, setCurrent] = useState(
    Math.floor(Math.random() * passages.length)
  );
  const [modalVisible, setModalVisible] = useState(false);
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
        <Text key={index} className="text-lime-600 font-playfairBold">
          {part}
        </Text>
      ) : (
        <Text key={index}>{part}</Text>
      )
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      className="px-8 bg-[#101010]"
    >
      <Text className="text-center text-2xl text-gray-200 mb-8 font-playfair">
        {highlightWordInPassage(data.passages["15"], data.word)}
      </Text>
      <Button title="Shuffle" onPress={handleRandom} />
      <Button title="Show Meaning" onPress={() => setModalVisible(true)} />

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
            <Text className="text-white mb-2 text-3xl font-playfairBold">
              {data.word}
            </Text>
            <Text className="text-white mb-8 text-lg">{data.word_meaning}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Done</Text>
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
    fontWeight: "bold",
    textAlign: "center",
  },
});
