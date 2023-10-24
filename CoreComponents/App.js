import { View, Text, Image, ImageBackground } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    // VIEW COMPONENT
    <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
      {/* NESTED VIEWS */}
      {/* <View
        style={{ height: 200, width: 200, backgroundColor: "lightgreen" }}
      ></View>
      <View
        style={{ height: 200, width: 200, backgroundColor: "lightblue" }}
      ></View> */}

      {/* TEXT COMPONENT AND NESTED TEXT COMPONENTS */}
      {/* <Text>
        <Text style={{ color: "white" }}>Hello</Text> wordl
      </Text> */}

      {/* IMAGE COMPONENT */}

      {/* STATIC */}
      {/* <Image style={{ width: 300, height: 300 }} source={logoImg} /> */}

      {/* NETWORK */}
      {/* <Image
        style={{ width: 300, height: 300 }}
        source={{ uri: "https://picsum.photos/200" }}
      /> */}

      {/* BACKGROUND IMAGES */}
      <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>React Native</Text>
      </ImageBackground>
    </View>
  );
}
