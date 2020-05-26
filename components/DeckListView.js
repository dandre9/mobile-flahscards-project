import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function DeckListView({ decks, selectDeck }) {
  return (
    <View style={styles.container}>
      {Object.keys(decks).map((deck) => (
        <TouchableOpacity
          onPress={() => selectDeck(decks[deck].title)}
          key={decks[deck].title}
          style={styles.deckCard}
        >
          <Text style={{ fontSize: 20 }}>{decks[deck].title}</Text>
          <Text>{decks[deck].questions.length} cards</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  deckCard: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
});
