import {
   View,
   Text,
   StatusBar,
   StyleSheet,
   Touchable,
   TouchableOpacity,
   Image,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import styles from "../../Style/style";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import FlatListCard from "../../components/FlatListCard";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Explore({ navigation }) {
   const { user } = useAuthContext();
   const [events, setEvents] = useState();
   const [neraby, setNeraby] = useState();
   useLayoutEffect(() => {
      const fetchEvents = async () => {
         const responce = await fetch(
            "https://ticketmaster-bsc1.onrender.com/api/events",
            {
               headers: {
                  Authorization: `Bearer ${user.token}`,
               },
            }
         );
         let json = await responce.json();
         let x = Math.floor(json.length / 2);

         let json1 = json.slice(0, x);
         let json2 = json.slice(x);

         if (responce.ok) {
            setEvents(json1);
         }
         if (responce.ok) {
            setNeraby(json2);
         }
      };

      if (user) {
         fetchEvents();
      }
   }, []);
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
         <View
            style={[
               styles.container,
               { marginTop: 10, backgroundColor: "#edede8" },
            ]}
         >
            <View style={styles.flatListContainer}>
               <Text style={styles.headerh2}>Upcoming Events</Text>
               <FlatList
                  data={events}
                  renderItem={({ item }) => {
                     return (
                        <View
                           style={{
                              flexDirection: "row",
                              width: 270,
                           }}
                        >
                           <FlatListCard item={item}></FlatListCard>
                        </View>
                     );
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
               />
            </View>
            <View style={styles.flatListContainer}>
               <Text style={styles.headerh2}>Nearby Events</Text>
               <FlatList
                  data={neraby}
                  renderItem={({ item }) => {
                     return (
                        <View
                           style={{
                              flexDirection: "row",
                              width: 270,
                           }}
                        >
                           <FlatListCard item={item}></FlatListCard>
                        </View>
                     );
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
               />
            </View>
         </View>
      </View>
   );
}

stylestest = StyleSheet.create({});

{
   /* <Button title="s" onPress={() => navigation.toggleDrawer()} /> */
}
