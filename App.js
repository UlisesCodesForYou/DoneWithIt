import { StyleSheet, TextInput, View, Button, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder="Your goals" />
        <Button title="Add your goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
});

// There ain't no css in native. Above is the best way to add styles.  I can add inline styles, but that'll be hard to read.
