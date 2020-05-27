import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { saveDeckTitle } from "../utils/api";

export default class NewDeckView extends React.Component {
  state = {
    deckTitle: "",
  };

  handleChangeInputText = (text) => {
    this.setState({ deckTitle: text });
  };

  onSubmit = () => {
    saveDeckTitle(this.state.deckTitle).then(() => {
      this.props.navigation.navigate("Decks");
    });
  };

  render() {
    const { deckTitle } = this.state;

    return (
      <View style={styles.container}>
        <Text>Insert the title of your new deck</Text>
        <TextInput
          placeholder="Deck title"
          style={styles.textInput}
          onChangeText={this.handleChangeInputText}
          value={deckTitle}
        />
        <TouchableOpacity onPress={this.onSubmit} style={styles.androidBtn}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
  },
  androidBtn: {
    marginTop: 25,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    textAlign: "center",
    color: "white",
  },
});
