import { ActivityIndicator } from "react-native";
import { setWorldAlignment, TrackingStates } from "expo/build/AR";

export const background={
welcome:require("../assets/images/welcome.png"),
encrypted:require("../assets/images/encrypted.png"),
privacy:require("../assets/images/privacy.png")
};

export const icons ={
  
    checked:require("../assets/icons/checked.png"),
    dropdown:require("../assets/icons/india.png"),
    unchecked:require("../assets/icons/unchecked.png"),
    offline:require("../assets/icons/online.png"),
    online:require("../assets/icons/offline.png"),
    india:require("../assets/icons/india.png"),
    australia:require("../assets/icons/australia.png"),
    russia:require("../assets/icons/russia.png"),
    singapore:require("../assets/icons/singapore.png"),
    sweden:require("../assets/icons/sweden.png"),
    pakistan:require("../assets/icons/pakistan.png"),
    unitedkingdom:require("../assets/icons/uk.png"),
    unitedstates:require("../assets/icons/usa.png"),
    dropdown:require("../assets/icons/dropdown.png")
};
export default{
background,
icons
};