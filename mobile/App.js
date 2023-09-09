import "react-native-gesture-handler";

import { StatusBar, StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContextProvider } from "./context/AuthContext";

export default function App() {
   return (
      <AuthContextProvider>
         <NavigationContainer>
            <StatusBar />
            <Navigation />
         </NavigationContainer>
      </AuthContextProvider>
   );
}
