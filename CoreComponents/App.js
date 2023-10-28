import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import Greet from "./components/Greet";
const logoImg = require("./assets/adaptive-icon.png");

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      {/* <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>React Native</Text>
      </ImageBackground> */}

      {/* BUTTON */}
      {/* <Button
        title={`Press`}
        onPress={() => console.log("Pressed")}
        color="midnightblue"
        disabled
      /> */}

      {/* PRESSABLE */}
      {/* <Button
        title={`Press`}
        onPress={() => console.log("Pressed")}
        color="midnightblue"
      />
      <Pressable
        onPress={() => console.log("Image Pressed")}
        // onPressIn={() => console.log("Image Pressed onPressIn")}
        // onLongPress={() => console.log("Image Pressed onLongPress")}
        // onPressOut={() => console.log("Image Pressed onPressOut")}
      >
        <Image
          style={{ width: 300, height: 300 }}
          source={{ uri: "https:picsum.photos/200" }}
        />
      </Pressable>
      <Pressable onPress={() => console.log("Text Pressed")}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi magna
          lorem, sollicitudin sed dui in, molestie maximus dui. Donec dolor
          magna, lacinia vel diam id, rhoncus maximus diam. Pellentesque
          pulvinar vestibulum sagittis. Cras porta, sem lobortis elementum
          varius, diam ligula varius risus, nec lobortis neque urna et arcu.
          Proin feugiat lobortis tempus. Duis quis tortor vitae diam mattis
          cursus. Quisque tempus eget nisi ac euismod. Etiam et interdum sapien.
          Suspendisse lobortis ligula blandit rutrum gravida. Fusce non urna
          lobortis, rhoncus justo nec, fermentum erat. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Aenean a tortor ut leo hendrerit scelerisque. Proin finibus
          at tellus ut maximus.
        </Text>
      </Pressable> */}

      {/* MODAL */}
      {/* <Button
        title={`Show modal`}
        onPress={() => setIsModalVisible(true)}
        color="midnightblue"
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ backgroundColor: "lightblue", flex: 1, padding: 60 }}>
          <Text>Modal Content</Text>
          <Button
            title="close"
            onPress={() => setIsModalVisible(false)}
            color={`midnightblue`}
          />
        </View>
      </Modal> */}

      {/* STATUSBAR */}
      {/* <StatusBar backgroundColor={"black"} barStyle={"default"} />
      <StatusBar backgroundColor={"darkblue"} barStyle={"light-content"} />
      <StatusBar hidden /> */}

      {/* ACTIVITYINDICATOR */}
      {/* <ActivityIndicator />
      <ActivityIndicator size={"small"} />
      <ActivityIndicator size={"large"} />
      <ActivityIndicator size={"large"} color={"black"} />
      <ActivityIndicator size={"large"} color={"black"} animating={false} /> */}

      {/* ALERT */}
      {/* <Button
        title="Show Alert 1"
        onPress={() => {
          Alert.alert("And you are hacked :) ");
        }}
      />
      <Button
        title="Show Alert 2"
        onPress={() => {
          Alert.alert("And you are hacked :) ", "Yup Boruto sucks");
        }}
      />
      <Button
        title="Show Alert 3"
        onPress={() => {
          Alert.alert("And you are hacked :) ", "Yup Boruto sucks", [
            {
              text: "Yes it does",
              onPress: () => console.log("You are breathtaking!"),
            },
            {
              text: "No it does not",
              onPress: () => console.log("You are J!"),
            },
          ]);
        }}
      /> */}

      {/* CUSTOM COMPONENT */}
      <Greet name="KSI" />
      <Greet name="Deji" />
    </View>

    // SCROLL VIEW
    // <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
    //   <ScrollView>
    //     <Image
    //       style={{ width: 300, height: 300 }}
    //       source={{ uri: "https://picsum.photos/200" }}
    //     />
    //     <Text>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi magna
    //       lorem, sollicitudin sed dui in, molestie maximus dui. Donec dolor
    //       magna, lacinia vel diam id, rhoncus maximus diam. Pellentesque
    //       pulvinar vestibulum sagittis. Cras porta, sem lobortis elementum
    //       varius, diam ligula varius risus, nec lobortis neque urna et arcu.
    //       Proin feugiat lobortis tempus. Duis quis tortor vitae diam mattis
    //       cursus. Quisque tempus eget nisi ac euismod. Etiam et interdum sapien.
    //       Suspendisse lobortis ligula blandit rutrum gravida. Fusce non urna
    //       lobortis, rhoncus justo nec, fermentum erat. Pellentesque habitant
    //       morbi tristique senectus et netus et malesuada fames ac turpis
    //       egestas. Aenean a tortor ut leo hendrerit scelerisque. Proin finibus
    //       at tellus ut maximus. Suspendisse luctus, orci vel pellentesque
    //       congue, lacus quam luctus turpis, sit amet accumsan nunc libero a sem.
    //       Morbi porttitor vehicula varius. Nunc et lectus molestie, lobortis
    //       massa eget, eleifend magna. Lorem ipsum dolor sit amet, consectetur
    //       adipiscing elit. Morbi magna lorem, sollicitudin sed dui in, molestie
    //       maximus dui. Donec dolor magna, lacinia vel diam id, rhoncus maximus
    //       diam. Pellentesque pulvinar vestibulum sagittis. Cras porta, sem
    //       lobortis elementum varius, diam ligula varius risus, nec lobortis
    //       neque urna et arcu. Proin feugiat lobortis tempus. Duis quis tortor
    //       vitae diam mattis cursus. Quisque tempus eget nisi ac euismod. Etiam
    //       et interdum sapien. Suspendisse lobortis ligula blandit rutrum
    //       gravida. Fusce non urna lobortis, rhoncus justo nec, fermentum erat.
    //       Pellentesque habitant morbi tristique senectus et netus et malesuada
    //       fames ac turpis egestas. Aenean a tortor ut leo hendrerit scelerisque.
    //       Proin finibus at tellus ut maximus. Suspendisse luctus, orci vel
    //       pellentesque congue, lacus quam luctus turpis, sit amet accumsan nunc
    //       libero a sem. Morbi porttitor vehicula varius. Nunc et lectus
    //       molestie, lobortis massa eget, eleifend magna.
    //     </Text>
    //     <Image
    //       style={{ width: 300, height: 300 }}
    //       source={{ uri: "https://picsum.photos/200" }}
    //     />
    //   </ScrollView>
    // </View>
  );
};

export default App;
