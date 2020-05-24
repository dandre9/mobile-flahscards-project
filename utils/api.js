import { AsyncStorage } from "react-native";

const FLASHCARDS_STORAGE_KEY = "MobileFlashcards:decks";

export function getDecks() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);
}

// export function getDeck(title){
//     return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);
// }

export function saveDeckTitle(title) {
  const deck = {
    title: title,
    questions: [],
  };

  AsyncStorage.mergeItem(
    FLASHCARDS_STORAGE_KEY,
    JSON.stringify({
      [title]: deck,
    })
  );

  return deck;
}

export function addCardToDeck(title, card) {
  const results = AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);

  if (results) {
    const data = JSON.parse(results);
    const deck = data[title];

    deck.questions = deck.questions.concat([card]);

    AsyncStorage.mergeItem(
      FLASHCARDS_STORAGE_KEY,
      JSON.stringify({
        [title]: deck,
      })
    );

    return card;
  }
}
