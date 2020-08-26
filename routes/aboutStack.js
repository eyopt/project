import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Profile from "../screens/profile";

const screens = {
  Profile: {
    screen: Profile,
  },
};

const AboutStack = createStackNavigator(screens);

export default AboutStack;
