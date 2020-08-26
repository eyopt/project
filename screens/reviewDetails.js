import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import RadioGroup, { Radio } from "react-native-radio-input/Components/main";
import { Agenda } from "react-native-calendars";

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("About");
  };
  const openMenu = () => {
    navigation.openDrawer();
  };

  let isCheckedIn = true;
  let [state, setState] = useState("Check In Now");

  const onPressButton = () => {
    alert(isCheckedIn ? "You have checked in" : "You have checked out!");
    setState(isCheckedIn ? "Checked Out" : "Checked In Now");
    isCheckedIn ? (isCheckedIn = false) : (isCheckedIn = true);
  };

  const getChecked = (value) => {
    console.log(value);
  };

  //set radio button
  const data = [{ label: "OTP-31F      " }, { label: "OTP - 32F" }];

  //configure chart bar

  const screenWidth = Dimensions.get("window").width;
  const dashboard = {
    labels: ["9am", "", "", "", "", "2pm", "", "", "", "", "7pm", ""],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          0,
        ],
      },
    ],
  };
  //book button
  const onPressButtonMorning = () => {
    Alert.alert(
      "Confirmation",
      "You have marked the visit on morning!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Confirm", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  };
  const onPressButtonAfternoon = () => {
    Alert.alert(
      "Confirmation",
      "You have marked the visit on afternoon!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Confirm", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
  };
  const onPressButtonAllDay = () => {
    Alert.alert(
      "Confirmation",
      "You have marked the visit the whole day!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Confirm", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );
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
      <View style={styles.checkinContainer}>
        <Text style={styles.logoText}>Welcome Back, Nora!</Text>
      </View>
      <View>
        <TouchableOpacity onPress={onPressButton}>
          <View
            style={{
              position: "absolute",
              width: 150,
              height: 40,
              paddingVertical: 9,
              paddingHorizontal: 12,
              borderRadius: 10,
              //borderColor: "#fff",
              borderRadius: 10,
              //borderWidth: 1,
              top: 150,
              left: 20,
              backgroundColor: "#FFCC00",
              opacity: 0.7,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "black",
              }}
            >
              {state}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.radioContainer}>
        <RadioGroup
          getChecked={getChecked}
          RadioGroupStyle={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
          coreStyle={{ color: "#FFCC00" }}
          IconStyle={{ color: "#fff" }}
          labelStyle={({ fontSize: 16 }, { color: "#fff" })}
        >
          <Radio iconName={"lens"} label={"OTP-31F      "} value={"A"} />
          <Radio iconName={"lens"} label={"OTP-32F"} value={"B"} />
        </RadioGroup>
      </View>

      <View
        style={{
          flex: 1,
          position: "absolute",
          top: 260,
          height: 380,
          width: 340,
          backgroundColor: "#010C14",
          opacity: 0.8,
          left: 20,
        }}
      ></View>

      <View style={styles.chartContainer}>
        <BarChart
          style={{
            marginVertical: 10,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
          data={dashboard}
          width={340}
          height={250}
          fromZero={true}
          yAxisSuffix={"%"}
          //yAxisLabel="%"
          chartConfig={{
            //backgroundGradientFrom: "transparent",
            //backgroundGradientTo: "transparent",
            backgroundGradientToOpacity: 0,
            backgroundGradientFromOpacity: 0,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(248, 231, 28, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            barPercentage: 0.6,
            useShadowColorFromDataset: false,
          }}
        />
      </View>

      <TouchableHighlight onPress={pressHandler}>
        <Image
          style={styles.logoImage}
          source={require("../assets/icon-calendar-white.png")}
          opacity={0.7}
        />
      </TouchableHighlight>
      <Text
        style={{
          position: "absolute",
          top: 585,
          left: 70,
          color: "yellow",
          fontSize: 12,
          //fontFamily: "Avenir",
          opacity: 0.6,
        }}
      >
        Month View
      </Text>
      <Text
        style={{
          position: "absolute",
          top: 610,
          left: 40,
          color: "#fff",
          fontSize: 12,
          //fontFamily: "Avenir",
          opacity: 0.6,
        }}
      >
        *Plan Your Visit: People typicallay spend up to 8 hours
      </Text>

      <Text
        style={{
          position: "absolute",
          top: 280,
          left: 80,
          color: "#fff",
          fontSize: 20,
          fontFamily: "Avenir",
          opacity: 0.6,
        }}
      >
        24
      </Text>
      <Text
        style={{
          position: "absolute",
          top: 305,
          left: 80,
          color: "#fff",
          fontSize: 12,

          opacity: 0.6,
        }}
      >
        Mon
      </Text>
      <Text
        style={{
          position: "absolute",
          top: 280,
          left: 140,
          color: "#fff",
          fontSize: 20,
          fontFamily: "Avenir",
          opacity: 0.6,
        }}
      >
        25
      </Text>
      <Text
        style={{
          position: "absolute",
          top: 305,
          left: 140,
          color: "#fff",
          fontSize: 12,
          opacity: 0.6,
        }}
      >
        Tue
      </Text>
      <Text
        style={{
          position: "absolute",
          top: 280,
          left: 200,
          color: "#03a9f4",
          fontSize: 20,
          fontFamily: "Avenir",
          opacity: 1,
        }}
      >
        26
      </Text>
      <Text
        style={{
          position: "absolute",
          top: 305,
          left: 200,
          color: "#03a9f4",
          fontSize: 12,
          opacity: 1,
        }}
      >
        Wed
      </Text>
      <Text
        style={{
          position: "absolute",
          top: 280,
          left: 260,
          color: "#fff",
          fontSize: 20,
          fontFamily: "Avenir",
          opacity: 0.6,
        }}
      >
        27
      </Text>
      <Text
        style={{
          position: "absolute",
          top: 305,
          left: 260,
          color: "#fff",
          fontSize: 12,
          opacity: 0.6,
        }}
      >
        Thu
      </Text>
      <Text
        style={{
          position: "absolute",
          top: 280,
          left: 320,
          color: "#fff",
          fontSize: 20,
          fontFamily: "Avenir",
          opacity: 0.6,
        }}
      >
        28
      </Text>
      <Text
        style={{
          position: "absolute",
          top: 305,
          left: 322,
          color: "#fff",
          fontSize: 12,
          opacity: 0.6,
        }}
      >
        Fri
      </Text>

      <View>
        <TouchableHighlight onPress={onPressButtonMorning}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "#fff",
              width: 100,
              top: 660,
              left: 20,
              height: 60,
              position: "absolute",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#fff",
                fontFamily: "Avenir",
                textAlign: "center",
                padding: 5,
              }}
            >
              Visit {"\n"}Morning
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPressButtonAfternoon}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "#fff",
              width: 100,
              top: 660,
              left: 140,
              height: 60,
              position: "absolute",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#fff",
                fontFamily: "Avenir",
                textAlign: "center",
                padding: 5,
              }}
            >
              Visit {"\n"} Afternoon
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPressButtonAllDay}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "#fff",
              width: 100,
              top: 660,
              left: 260,
              height: 60,
              position: "absolute",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#fff",
                fontFamily: "Avenir",
                textAlign: "center",
                padding: 5,
              }}
            >
              Visit {"\n"} All Day
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 600,
    left: 20,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  logoText: {
    fontSize: 26,
    color: "#fff",
    fontFamily: "Avenir",
    top: 100,
    left: 20,
    position: "absolute",
  },
  checkinContainer: {
    flex: 1,
    position: "absolute",
  },
  firstButton: {
    position: "absolute",
    width: 130,
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    top: 150,
    left: 20,
    backgroundColor: "#FFCC00",
    //alignItems: "center",
    //alignContent: "center",
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 50,
  },
  radioContainer: {
    position: "absolute",
    top: 220,
    left: 70,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  chartContainer: {
    top: 325,
    left: 5,
    position: "absolute",
  },
  logoImage: {
    width: 20,
    height: 20,
    left: 40,
    top: 580,
    position: "absolute",
  },
});
