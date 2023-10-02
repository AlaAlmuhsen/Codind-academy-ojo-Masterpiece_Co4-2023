import { View, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "../../Style/style";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useAuthContext } from "../../hooks/useAuthContext";
import TicketCard from "../../components/TicketCard";
import EventCard from "../../components/EventCard";

export default function Events() {
   const { user } = useAuthContext();
   const [events, setEvents] = useState();
   const [search, setSearch] = useState("");
   const [searchResult, setSearchResult] = useState(events);
   const [a, setA] = useState(["ab", "b", "c"]);

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

         if (responce.ok) {
            setEvents(json);
            setSearchResult(json);
         }
      };

      if (user) {
         fetchEvents();
      }
   }, []);

   useEffect(() => {
      // console.log(archResult);
      if (searchResult !== undefined) {
         let s = searchResult.filter((event) =>
            event.eventTitle.toLowerCase().includes(search.toLowerCase())
         );
         setSearchResult(s);

         if (search.length === 0) {
            setSearchResult(events);
         }
      }
   }, [search]);

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
                  onChangeText={setSearch}
                  value={search}
               ></TextInput>
            </View>
         </View>
         <View style={[styles.container, { marginTop: 15 }]}>
            {searchResult !== undefined && (
               <ScrollView style={{}}>
                  {searchResult.map((event, index) => {
                     return <EventCard event={event} key={index} />;
                  })}
               </ScrollView>
            )}
            {events === undefined && <Text>Loading ...</Text>}
         </View>
      </View>
   );
}
