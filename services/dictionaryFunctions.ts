import { WORDS_API_URL } from "@/data/constants";
import { DictionaryEntry } from "@/types";

export const fetchMeaningOfWord = async (
  word: string
): Promise<DictionaryEntry[]> => {
  const res = await fetch(`${WORDS_API_URL}/${word}`);

  if (!res.ok) {
    throw new Error(`Could not fetch definitions (status ${res.status})`);
  }

  const data = await res.json();
  return data;
};
