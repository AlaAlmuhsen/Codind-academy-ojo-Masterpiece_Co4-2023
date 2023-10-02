import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function EventCard({ event }) {
   const item = event;
   const { navigate } = useNavigation();
   return (
      <Pressable
         style={{
            borderColor: "grey",
            borderWidth: 1,
            padding: 10,
            height: 100,
            borderRadius: 10,
            justifyContent: "center",
            flexDirection: "row",
            marginBottom: 20,
         }}
         onPress={() => navigate("EventDetails", { item })}
      >
         <Image
            source={{
               uri: event.eventBackgroundimage,
            }}
            style={{
               width: 80,
               height: 80,
               borderRadius: 10,
               marginBottom: 10,
               marginRight: 10,
            }}
         />
         <View style={{ flex: 1, paddingTop: 5 }}>
            <Text style={{ color: "#C83B3B", fontWeight: "500" }}>
               {event.DateOfEvent} - {event.timeOfEvent}
            </Text>
            <Text style={{ fontSize: 19, fontWeight: "400", marginBottom: 5 }}>
               {event.eventTitle}
            </Text>
            <Text
               style={{
                  textAlign: "right",
                  marginRight: 10,
                  fontWeight: "700",
                  fontSize: 20,
                  color: "#C83B3B",
               }}
            >
               {event.price}$
            </Text>
         </View>
      </Pressable>
   );
}
