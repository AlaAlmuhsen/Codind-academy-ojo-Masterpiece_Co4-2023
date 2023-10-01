import { View, Text, Image } from "react-native";
import React from "react";

export default function TicketCard({ ticket }) {
   return (
      <View
         style={{
            // backgroundColor: "red",
            borderColor: "grey",
            borderWidth: 1,
            padding: 10,
            height: 100,
            borderRadius: 10,
            justifyContent: "center",
            flexDirection: "row",
            marginBottom: 20,
         }}
      >
         <Image
            source={{
               uri: ticket.eventBackgroundimage,
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
               {ticket.DateOfEvent} - {ticket.timeOfEvent}
            </Text>
            <Text style={{ fontSize: 19, fontWeight: "400", marginBottom: 5 }}>
               {ticket.eventTitle}
            </Text>
            <Text>Ticket Number :{ticket.ticketNumber}</Text>
         </View>
      </View>
   );
}
