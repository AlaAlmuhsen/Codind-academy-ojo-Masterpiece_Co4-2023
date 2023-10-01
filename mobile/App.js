import "react-native-gesture-handler";

import { StatusBar, StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContextProvider } from "./context/AuthContext";
import { TicketContextProvider } from "./context/TicketContext";

export default function App() {
   return (
      <AuthContextProvider>
         <TicketContextProvider>
            <NavigationContainer>
               <StatusBar />
               <Navigation />
            </NavigationContainer>
         </TicketContextProvider>
      </AuthContextProvider>
   );
}
