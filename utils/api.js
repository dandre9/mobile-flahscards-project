import { AsyncStorage } from "react-native";

const FLASHCARDS_STORAGE_KEY = "MobileFlashcards:data";
const NOTIFICATION_REMINDER = "MobileFlashcards:reminder";

export async function getReminder() {
  let reminder = await AsyncStorage.getItem(NOTIFICATION_REMINDER);

  return reminder;
}

export async function saveReminder() {
  const date = new Date().setHours(0, 0, 0, 0);

  await AsyncStorage.setItem(NOTIFICATION_REMINDER, date.toString());
}

export async function getDecks() {
  let decks = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);

  return decks ? JSON.parse(decks) : {};
}

export async function getDeck(title) {
  const response = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);
  const decks = JSON.parse(response);
  const deck = decks[title];

  return deck;
}

export async function saveDeckTitle(title) {
  const deck = {
    title: title,
    questions: [],
  };

  await AsyncStorage.mergeItem(
    FLASHCARDS_STORAGE_KEY,
    JSON.stringify({
      [title]: deck,
    })
  );

  return deck;
}

export async function addCardToDeck(title, card) {
  const response = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);
  const decks = JSON.parse(response);
  const deck = decks[title];
  deck.questions = deck.questions.concat([card]);

  AsyncStorage.mergeItem(
    FLASHCARDS_STORAGE_KEY,
    JSON.stringify({
      [title]: deck,
    })
  );

  return deck;
}
