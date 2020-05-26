import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default class NewQuestionView extends React.Component {
  state = {
    question: "",
    answer: "",
  };

  handleChangeInputText = (text, state) => {
    this.setState({ [state]: text });
  };

  onSubmit = () => {
    const { question, answer } = this.state;
    const questionObj = {
      question,
      answer,
    };

    this.props.createQuestion(questionObj);
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
        <TextInput
          placeholder="Answer"
          style={styles.textInput}
          onChangeText={(e) => this.handleChangeInputText(e, "answer")}
          value={answer}
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
