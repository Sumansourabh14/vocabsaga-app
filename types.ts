export interface WordPassage {
  id: string;
  word: string;
  word_meaning: string;
  difficulty_level: string;
  source_book?: string;
  source_author?: string;
  passages: {
    [key: string]: string;
  };
}
export interface BookmarkedWord {
  id: string;
  word: string;
  createdAt: string;
}
