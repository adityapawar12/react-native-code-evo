import { Text, View } from "react-native";

// CUSTOM COMPONENT
const Greet = ({ name }) => {
  return (
    <View>
      <Text>Hej! {name}</Text>
    </View>
  );
};

export default Greet;
