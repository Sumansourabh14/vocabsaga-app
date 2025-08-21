import rawPassages from "@/data/passages/p1.json";
import { WordPassage } from "@/types";
import { useState } from "react";
import { Button, Text, View } from "react-native";

const passages: WordPassage[] = rawPassages;

export default function Story() {
  const [current, setCurrent] = useState(
    Math.floor(Math.random() * passages.length)
  );
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
      className="px-8 bg-black"
    >
      <Text className="text-center text-2xl text-white mb-8 font-playfair">
        {highlightWordInPassage(data.passages["15"], data.word)}
      </Text>
      <Button title="Shuffle" onPress={handleRandom} />
    </View>
  );
}
