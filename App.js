import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DeckListView from "./components/DeckListView";
import NewDeckView from "./components/NewDeckView";
import DeckView from "./components/DeckView";
import NewQuestionView from "./components/NewQuestionView";
import QuizView from "./components/QuizView";
import { saveDeckTitle, addCardToDeck, getDecks } from "./utils/api";

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
    decks: {},
    selectedDeck: "",
  };

  componentDidMount() {
    getDecks().then((response) => {
      this.setState({ decks: response });
    });
  }

  createDeck = (deckTitle) => {
    const { decks } = this.state;

    if (typeof decks[deckTitle] === "undefined") {
      const newDeck = saveDeckTitle(deckTitle);

      decks[deckTitle] = newDeck;

      this.setState({ decks });
    }
  };

  createQuestion = (question) => {
    let { decks, selectedDeck } = this.state;

    addCardToDeck(selectedDeck, question);
    decks[selectedDeck].questions.push(question);

    this.setState({ decks });
  };

  selectDeck = (deckTitle) => {
    this.setState({ selectedDeck: deckTitle });
  };

  render() {
    return (
      <NavigationContainer
        style={{
          flex: 1,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack.Navigator>
          <Stack.Screen name="Decks" component={DeckListView} />
          <Stack.Screen name="New Deck" component={NewDeckView} />
          <Stack.Screen name="Deck" component={DeckView} />
          <Stack.Screen name="New Question" component={NewQuestionView} />
          <Stack.Screen name="Quiz" component={QuizView} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
