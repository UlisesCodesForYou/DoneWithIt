import { StyleSheet, TextInput } from "react-native";

const GoalInput = (props) => {
  return (
    <TextInput
      placeholder="Your goals"
      style={styles.textInput}
      onChangeText={props.inputHandler}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
