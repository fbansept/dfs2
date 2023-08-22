import { StatusBar } from "expo-status-bar";
import { Connexion } from "./screens/Connexion/Connexion";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Inscription } from "./screens/Inscription/Inscription";
import { Liste } from "./screens/Liste/Liste";

const App = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen component={Connexion} name="Login"></Drawer.Screen>
      <Drawer.Screen component={Inscription} name="Sign in"></Drawer.Screen>
      <Drawer.Screen component={Liste} name="Stuff list"></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <App></App>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
