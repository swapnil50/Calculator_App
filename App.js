import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "=") {
      try {
        const evaluation = eval(input);
        setResult(isNaN(evaluation) ? "Error" : evaluation.toString());
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput(""); // Clear everything
      setResult("");
    } else if (value === "CE") {
      setInput(input.slice(0, -1)); // Remove last character
      setResult("");
    } else if (value === "%") {
      try {
        const percent = eval(input) / 100;
        setResult(percent.toString());
      } catch {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        {[
          ["7", "8", "9", "/"],
          ["4", "5", "6", "*"],
          ["1", "2", "3", "-"],
          ["CE", "0", ".", "+"],
          ["C", "=", "%"],
        ].map((row, index) => (
          <View style={styles.buttonRow} key={index}>
            {row.map((item) => (
              item ? (
                <TouchableOpacity
                  key={item}
                  style={item === "=" ? styles.equalsButton : item === "C" ? styles.clearButton : styles.button}
                  onPress={() => handlePress(item)}
                >
                  <Text style={styles.buttonText}>{item}</Text>
                </TouchableOpacity>
              ) : null
            ))}
          </View>
        ))}
      </View>
      <Text style={styles.footer}>Calc by Swapnil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 40,
  },
  display: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 20,
    backgroundColor: "#2d2d2d",
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  input: {
    fontSize: 36,
    color: "#fff",
    marginBottom: 10,
  },
  result: {
    fontSize: 24,
    color: "#888",
  },
  buttons: {
    flex: 5,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    width: "22%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  equalsButton: {
    width: "48%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  clearButton: {
    width: "48%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f44336",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 24,
    color: "#333",
  },
  footer: {
    padding: 10,
    textAlign: "center",
    color: "#888",
    backgroundColor: "#f5f5f5",
  },
});

export default App;
