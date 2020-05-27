import React from "react";
import {
  View,
  Text,
  TextInput,
  Picker,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { addCardToDeck } from "../utils/api";

export default class NewQuestionView extends React.Component {
  state = {
    question: "",
    answer: "Correct",
  };

  handleChangeInputText = (text, state) => {
    this.setState({ [state]: text });
  };

  onSubmit = () => {
    const { question, answer } = this.state;

    if (question) {
      const questionObj = {
        question,
        answer,
      };

      const { title } = this.props.route.params.deck;

      addCardToDeck(title, questionObj).then((response) => {
        this.props.navigation.navigate("Deck", { deck: response });
      });
    }
  };

  render() {
    const { question, answer } = this.state;

    return (
      <View style={styles.container}>
        <Text>Insert the question</Text>
        <TextInput
          placeholder="Question"
          style={styles.textInput}
          onChangeText={(e) => this.handleChangeInputText(e, "question")}
          value={question}
        />
        <Text>Insert the answer</Text>
        <Picker
          placeholder="Answer"
          //   style={styles.textInput}
          onValueChange={(e) => this.handleChangeInputText(e, "answer")}
          selectedValue={answer}
        >
          <Picker.Item label="Correct" value="Correct" />
          <Picker.Item label="Incorrect" value="Incorrect" />
        </Picker>
        <TouchableOpacity onPress={this.onSubmit} style={styles.androidBtn}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
