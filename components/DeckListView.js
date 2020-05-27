import React from "react";
import {
  Alert,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { getDecks, getDeck, getReminder } from "../utils/api";

export default class DeckListView extends React.Component {
  state = { decks: {} };

  componentDidMount() {
    getDecks().then((response) => {
      this.setState({ decks: response });
    });

    getReminder().then((response) => {
      if (!response) {
        Alert.alert("Hey!", "You havent completed any quiz today.");
      } else {
        const today = new Date().setHours(0, 0, 0, 0);
        if (today > parseInt(response, 10)) {
          Alert.alert("Hey!", "You havent completed any quiz today.");
        }
      }
    });
  }

  componentDidUpdate() {
    getDecks().then((response) => {
      if (
        Object.keys(this.state.decks).length !== Object.keys(response).length
      ) {
        this.setState({ decks: response });
      }
    });
  }

  selectDeck = (title) => {
    getDeck(title).then((response) => {
      this.props.navigation.navigate("Deck", { deck: response });
    });
  };

  render() {
    const { decks } = this.state;

    return (
      <ScrollView style={styles.container}>
        {Object.keys(decks).map((deck) => (
          <TouchableOpacity
            onPress={() => this.selectDeck(decks[deck].title)}
            key={decks[deck].title}
            style={styles.deckCard}
          >
            <Text style={{ fontSize: 20 }}>{decks[deck].title}</Text>
            <Text>{decks[deck].questions.length} cards</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("New Deck")}
          style={styles.androidBtn}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            + New deck
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
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
  androidBtn: {
    marginTop: 25,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
  },
});
