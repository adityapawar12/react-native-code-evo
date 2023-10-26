import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
} from "react-native";
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
}
