import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function DeckView({ selectedDeck, decks }) {
  return (
    <View style={styles.container}>
      <Text>{selectedDeck}</Text>
      {/* <Text>{decks[selectedDeck].questions.length} cards</Text> */}
      <TouchableOpacity
        style={[styles.androidBtn, { backgroundColor: "white" }]}
      >
        <Text style={[styles.btnText, { color: "black" }]}>Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.androidBtn, { backgroundColor: "black" }]}
      >
        <Text style={[styles.btnText, { color: "white" }]}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  text: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
  },
  androidBtn: {
    marginTop: 15,
    padding: 10,
    borderRadius: 2,
    borderWidth: 1,
  },
  btnText: {
    textAlign: "center",
  },
});
