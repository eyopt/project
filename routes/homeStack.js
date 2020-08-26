import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import About from "../screens/about";
import ReviewDetails from "../screens/reviewDetails";
import React from "react";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "",
      headerTransparent: true,
    },
  },
  About: {
    screen: About,
    navigationOptions: {
      title: "",
      headerTransparent: true,
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "",
      headerTransparent: true,
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default HomeStack;
