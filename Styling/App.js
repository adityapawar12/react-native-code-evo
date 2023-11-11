import { Text, View, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      {/* BASIC STYLESHEET API STYLES */}
      {/* <Text style={styles.title}>aditya</Text> */}

      {/* MULTIPLE STYLES */}
      <View style={[styles.box, styles.lightBlueBox]}>
        <Text>Light Blue Box</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBox]}>
        <Text>Light Green Box</Text>
      </View>
    </View>
  );
};

export default App;

// BASIC STYLESHEET API STYLES
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "greenyellow", padding: 60 },
  title: { fontSize: 40, color: "black" },

  // REPEATING STYLES
  // lightBlueBox: {
  //   backgroundColor: "lightblue",
  //   height: 100,
  //   width: 100,
  //   padding: 10,
  // },
  // lightGreenBox: {
  //   backgroundColor: "lightgreen",
  //   height: 100,
  //   width: 100,
  //   padding: 10,
  // },

  // MULTIPLE STYLES
  box: {
    height: 100,
    width: 100,
    padding: 10,
  },
  lightBlueBg: {
    backgroundColor: "lightblue",
  },
  lightGreenBg: {
    backgroundColor: "lightgreen",
  },
});
