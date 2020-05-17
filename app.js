import {createAppContainer,createSwitchNavigator} from "react-navigation";

import Welcome from "../screens/Welcome";
import Vpn from "../screens/Vpn";

const Screens=createSwitchNavigator({
    Welcome,
    Vpn
});

export default createAppContainer(Screens);
