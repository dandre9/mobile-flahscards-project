import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class DeckView extends React.Component {
  state = { deck: { questions: [] } };

  componentDidMount() {
    this.setState({ deck: this.props.route.params.deck });
  }

  componentDidUpdate() {
    if (
      this.props.route.params.deck.questions.length !==
      this.state.deck.questions.length
    ) {
      this.setState({ deck: this.props.route.params.deck });
    }
  }

  render() {
    const { deck } = this.state;

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>{deck.title}</Text>
        <Text style={styles.countText}>{deck.questions.length} cards</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("New Question", { deck })
          }
          style={[styles.androidBtn, { backgroundColor: "white" }]}
        >
          <Text style={[styles.btnText, { color: "black" }]}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Quiz", { deck })}
          style={[styles.androidBtn, { backgroundColor: "black" }]}
        >
          <Text style={[styles.btnText, { color: "white" }]}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  countText: {
    color: "gray",
    marginTop: 5,
  },
  androidBtn: {
    marginTop: 15,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  btnText: {
    textAlign: "center",
  },
});
