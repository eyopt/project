import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const { landscape } = useDeviceOrientation();
  const [line, setLine] = useState("");
  const [name, setName] = useState("");
  const [Number, setNumber] = useState("");

  //console.log(line, name, Number);

  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
  };

  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <ImageBackground
      style={styles.image}
      source={require("../assets/skystar.jpg")}
    >
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
        color="white"
      />
      <View style={styles.contextView}>
        <Image
          style={styles.logoImage}
          source={require("../assets/logo.png")}
        />
        <Text style={styles.logoText}>CheckIn</Text>
        <View style={styles.inputStyle}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#868686"
            onChangeText={(val) => setName(val)}
          />
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="Staff Number(LNP)"
            placeholderTextColor="#868686"
            onChangeText={(val) => setNumber(val)}
          />
          <TextInput
            style={styles.input}
            placeholder="Service Line"
            placeholderTextColor="#868686"
            onChangeText={(val) => setLine(val)}
          />
        </View>
        <TouchableOpacity onPress={pressHandler}>
          <View style={styles.firstButton}>
            <Text
              style={{
                fontSize: 22,
                color: "black",
                fontFamily: "Avenir",
              }}
            >
              Next
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 80,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  contextView: {
    alignItems: "center",
    flex: 1,
    top: 100,
  },
  logoImage: {
    width: 90,
    height: 90,
    left: 5,
  },
  logoText: {
    fontSize: 22,
    color: "#fff",
    fontFamily: "Optima",
    top: 5,
  },
  inputStyle: {
    flex: 0.5,
    top: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    opacity: 0.7,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#777",
    padding: 14,
    margin: 20,
    width: 250,
    fontSize: 18,
    fontFamily: "Avenir",
  },
  firstButton: {
    backgroundColor: "#FFCC00",
    width: 150,
    height: 50,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    top: 50,
    alignItems: "center",
    alignContent: "center",
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 50,
  },
});
