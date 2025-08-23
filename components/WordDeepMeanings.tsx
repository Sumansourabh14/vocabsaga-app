import { DictionaryEntry } from "@/types";
import { Text, View } from "react-native";

const WordDeepMeanings = ({
  phonetic,
  phonetics,
  origin,
  meanings,
}: DictionaryEntry) => {
  return (
    <View className="px-8 pt-4">
      {/* Phonetic */}
      {phonetic && (
        <Text className="text-gray-600 text-lg font-inter">/{phonetic}/</Text>
      )}

      {/* Origin */}
      {origin && (
        <View>
          <Text className="font-semibold">Origin</Text>
          <Text className="text-sm text-muted-foreground">{origin}</Text>
        </View>
      )}

      {/* Meanings */}
      <View>
        {meanings.map((meaning, index) => (
          <View key={index} className="mt-2">
            <Text className="text-lg font-interBold">
              {meaning.partOfSpeech}
            </Text>

            <View>
              {meaning.definitions.map((def, i) => (
                <View key={i} className="mb-2">
                  <View>
                    <Text className="font-interBold">{i + 1}.</Text>
                    <Text className="font-inter">{def.definition}</Text>
                  </View>

                  {def.example && (
                    <Text className="text-sm mt-1 text-gray-500 font-inter">
                      Example: {def.example}
                    </Text>
                  )}

                  {/* {(def.synonyms.length > 0 || def.antonyms.length > 0) && (
                    <div className="text-sm text-muted-foreground mt-4 space-y-4">
                      {def.synonyms.length > 0 && (
                        <Text>
                          Similar: 
                          {def.synonyms.map((syn) => (
                            <Badge
                              asChild
                              key={syn}
                              className="mr-2"
                              variant={"secondary"}
                            >
                              <Link to={`/word/${syn}`}>{syn}</Link>
                            </Badge>
                          ))}
                        </Text>
                      )}
                      {def.antonyms.length > 0 && (
                        <p>
                          <strong>Opposite: </strong>
                          {def.antonyms.map((ant) => (
                            <Badge
                              asChild
                              key={ant}
                              className="mr-2"
                              variant={"secondary"}
                            >
                              <Link to={`/word/${ant}`}>{ant}</Link>
                            </Badge>
                          ))}
                        </p>
                      )}
                    </div>
                  )} */}
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default WordDeepMeanings;
