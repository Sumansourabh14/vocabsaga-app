export interface WordPassage {
  id: string;
  word: string;
  inferred_meaning: string;
  difficulty_level: string;
  usage_tone?: string;
  book: {
    name: string;
    author: string;
  };
  passage: string;
}
export interface BookmarkedWord {
  id: string;
  word: string;
  createdAt: string;
}

export type DictionaryEntry = {
  word: string;
  phonetic?: string;
  phonetics: {
    text?: string;
    audio?: string;
  }[];
  origin?: string;
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example?: string;
      synonyms: string[];
      antonyms: string[];
    }[];
  }[];
};
