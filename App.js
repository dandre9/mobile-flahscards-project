import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DeckListView from "./components/DeckListView";
import NewDeckView from "./components/NewDeckView";
import DeckView from "./components/DeckView";
import NewQuestionView from "./components/NewQuestionView";
import QuizView from "./components/QuizView";

const Stack = createStackNavigator();

export default class App extends React.Component {
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
