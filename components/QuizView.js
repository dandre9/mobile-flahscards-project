import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { saveReminder } from "../utils/api";

export default class QuizView extends React.Component {
  state = {
    questionPosition: 0,
    questionAnswer: "question",
    correctAnswers: 0,
  };

  switchAnswerQuestion = () => {
    const { questionAnswer } = this.state;

    this.setState({
      questionAnswer: questionAnswer === "question" ? "answer" : "question",
    });
  };

  sendAnswer = (answer) => {
    const { deck } = this.props.route.params;
    let { questionPosition, correctAnswers } = this.state;

    if (answer === deck.questions[questionPosition].answer) {
      correctAnswers++;
    }

    questionPosition++;

    if (questionPosition === deck.questions.length) {
      saveReminder();
    }

    this.setState({ correctAnswers, questionPosition });
  };

  restartQuiz = () => {
    this.setState({
      questionPosition: 0,
      questionAnswer: "question",
      correctAnswers: 0,
    });
  };

  render() {
    const { questionPosition, questionAnswer, correctAnswers } = this.state;
    const { deck } = this.props.route.params;

    if (deck.questions.length > questionPosition) {
      return (
        <View style={styles.container}>
          <Text style={{ marginBottom: 20 }}>
            {questionPosition + 1} / {deck.questions.length}
          </Text>
          <Text style={{ fontSize: 30 }}>
            {deck.questions[questionPosition][questionAnswer]}
          </Text>
          <TouchableOpacity>
            <Text
              onPress={this.switchAnswerQuestion}
              style={{ color: "#d4271a" }}
            >
              {questionAnswer === "question" ? "Answer" : "Question"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.sendAnswer("Correct")}
            style={[styles.androidBtn, { backgroundColor: "green" }]}
          >
            <Text style={[styles.btnText]}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.sendAnswer("Incorrect")}
            style={[styles.androidBtn, { backgroundColor: "red" }]}
          >
            <Text style={[styles.btnText]}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={{ fontSize: 30 }}>Result</Text>
          <Text>
            {Math.round((correctAnswers / deck.questions.length) * 100 * 100) /
              100}
            % correct
          </Text>
          <TouchableOpacity
            onPress={this.restartQuiz}
            style={[styles.androidBtn, { backgroundColor: "black" }]}
          >
            <Text style={[styles.btnText, { color: "white" }]}>Start Over</Text>
          </TouchableOpacity>
        </View>
      );
    }
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
    width: "100%",
  },
  btnText: {
    textAlign: "center",
    color: "white",
  },
});
