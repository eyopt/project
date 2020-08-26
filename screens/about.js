import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  ImageBackground,
  TouchableHighlight,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import RadioGroup, { Radio } from "react-native-radio-input/Components/main";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

export default function About({ navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  //set radio button
  const data = [{ label: "OTP - 31F" }, { label: "OTP - 32F" }];
  const getChecked = (value) => {
    console.log(value);
  };

  let state = {
    selectedDate: "",
    markedDates: {},
  };

  let getSelectedDayEvents = (date) => {
    let markedDates = {};
    markedDates[date] = {
      selected: true,
      color: "#00B0BF",
      textColor: "#FFFFFF",
    };
    let serviceDate = moment(date);
    serviceDate = serviceDate.format("DD.MM.YYYY");
    setState({
      selectedDate: serviceDate,
      markedDates: markedDates,
    });
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
        <Text style={styles.secondText}>26 August 2020, 7:16pm</Text>
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
          top: 600,
          height: 30,
          width: 340,
          backgroundColor: "#010C14",
          opacity: 0.7,
          left: 20,
        }}
      ></View>
      <View style={styles.calendarContainer}>
        <Calendar
          style={{
            height: 350,
            width: 340,
            backgroundColor: "#010C14",
            opacity: 0.7,
            borderColor: "yellow",
          }}
          theme={{
            textSectionTitleDisabledColor: "#d9e1e8",
          }}
          current={"2020-08-26"}
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          onDayLongPress={(day) => {
            console.log("selected day", day);
          }}
          markedDates={{
            "2020-08-26": {
              selected: true,
              marked: true,
              selectedColor: "#03a9f4",
            },
            "2020-08-29": {
              selected: true,
              marked: true,
              selectedColor: "#03a9f4",
            },
            "2020-08-25": {
              selected: true,
              marked: true,
              selectedColor: "#eb144c",
            },
            "2020-08-18": {
              marked: true,
              dotColor: "#eb144c",
              activeOpacity: 0,
            },
            "2020-08-01": {
              marked: true,
              dotColor: "#eb144c",
              activeOpacity: 0,
            },
          }}
        />
      </View>
      <View>
        <View
          style={{
            position: "absolute",
            top: 615,
            height: 10,
            width: 10,
            backgroundColor: "#eb144c",
            left: 30,
            borderRadius: 100,
          }}
        ></View>
        <Text
          style={{
            position: "absolute",
            top: 610,
            left: 50,
            color: "#fff",
            fontSize: 13,
          }}
        >
          Busy Day
        </Text>
        <View
          style={{
            position: "absolute",
            top: 615,
            height: 10,
            width: 10,
            backgroundColor: "#03a9f4",
            left: 140,
            borderRadius: 100,
          }}
        ></View>
        <Text
          style={{
            position: "absolute",
            top: 610,
            left: 160,
            color: "#fff",
            fontSize: 13,
          }}
        >
          Marked Vist
        </Text>
        <View
          style={{
            position: "absolute",
            top: 617.5,
            height: 5,
            width: 5,
            backgroundColor: "#eb144c",
            left: 270,
            borderRadius: 100,
          }}
        ></View>
        <Text
          style={{
            position: "absolute",
            top: 610,
            left: 290,
            color: "#fff",
            fontSize: 13,
          }}
        >
          Holiday
        </Text>
      </View>
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
    padding: 24,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 50,
  },
  checkinContainer: {
    flex: 1,
    position: "absolute",
  },
  logoText: {
    fontSize: 26,
    color: "#fff",
    fontFamily: "Avenir",
    top: 100,
    left: 20,
    position: "absolute",
  },
  secondText: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Avenir",
    top: 140,
    left: 20,
    position: "absolute",
  },
  radioContainer: {
    position: "absolute",
    top: 200,
    left: 70,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  calendarContainer: {
    position: "absolute",
    top: 250,
    left: 20,
  },
});
