import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default class NewDeckView extends React.Component {
  state = {
    deckTitle: "",
  };

  handleChangeInputText = (text) => {
    this.setState({ deckTitle: text });
  };

  onSubmit = () => {
    this.props.createDeck(this.state.deckTitle);
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
    borderRadius: 2,
  },
  btnText: {
    textAlign: "center",
    color: "white",
  },
});
