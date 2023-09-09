import {
   View,
   Text,
   StatusBar,
   StyleSheet,
   Touchable,
   TouchableOpacity,
   Image,
} from "react-native";
import React from "react";
import { Button } from "react-native";
import styles from "../../Style/style";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import logo from "../../assets/logo/ticketmaster-high-resolution-logo-color-on-transparent-background.png";

export default function Explore({ navigation }) {
   let arr = [
      { name: "a", key: "1" },
      { name: "a", key: "2" },
      { name: "a", key: "3" },
      { name: "a", key: "4" },
   ];
   return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
         <View style={styles.searchBoxContainer}>
            <StatusBar backgroundColor="#C83B3B" />
            <View style={styles.searchBox}>
               <Feather name="search" size={24} color="white" />
               <TextInput
                  style={styles.textInput}
                  placeholder="Search..."
                  placeholderTextColor={"#d4d9d5"}
               ></TextInput>
            </View>
         </View>
         <View style={[styles.container, { marginTop: 10 }]}>
            <View style={styles.flatListContainer}>
               <Text style={styles.headerh2}>Upcoming Events</Text>
               <FlatList
                  data={arr}
                  renderItem={({ item }) => {
                     return (
                        <View
                           style={{
                              flexDirection: "row",
                              width: 270,
                           }}
                        >
                           <TouchableOpacity
                              style={{
                                 backgroundColor: "grey",
                                 width: 245,
                                 marginRight: 5,
                                 borderRadius: 10,
                                 height: 250,
                                 padding: 8,
                              }}
                           >
                              <Image
                                 // source={logo}
                                 source={{
                                    uri: "https://placehold.co/600x400/png",
                                 }}
                                 style={{
                                    width: "100%",
                                    height: "60%",
                                    borderRadius: 10,
                                    marginBottom: 10,
                                 }}
                              />
                              <Text style={styles.headerh2}>{item.name}</Text>
                              <Text>Location</Text>
                              <Text>Price</Text>
                           </TouchableOpacity>
                        </View>
                     );
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
               />
            </View>
            <Text>aa</Text>
         </View>
      </View>
   );
}

stylestest = StyleSheet.create({});

{
   /* <Button title="s" onPress={() => navigation.toggleDrawer()} /> */
}
