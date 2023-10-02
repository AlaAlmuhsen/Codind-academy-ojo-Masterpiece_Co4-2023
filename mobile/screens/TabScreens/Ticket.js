import { View, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import TicketCard from "../../components/TicketCard";
import styles from "../../Style/style";
import { ScrollView } from "react-native-gesture-handler";

export default function Ticket() {
   const { user } = useAuthContext();
   const [tickets, setTickets] = useState();
   useEffect(() => {
      const fetchTickets = async () => {
         const responce = await fetch(
            "https://ticketmaster-bsc1.onrender.com/api/ticket/getticketforuser",
            {
               headers: {
                  Authorization: `Bearer ${user.token}`,
               },
            }
         );
         const json = await responce.json();

         if (responce.ok) {
            setTickets(json);
         }
      };

      if (user) {
         fetchTickets();
      }
   }, []);
   return (
      <View style={styles.container}>
         <Text style={{ marginTop: 20, fontSize: 26, marginBottom: 10 }}>
            Your Tickets :
         </Text>
         {tickets === undefined && <Text>Loading...</Text>}
         {/* {tickets.length === 0 && <Text>No Tickets</Text>} */}
         {tickets !== undefined && (
            <ScrollView style={{}}>
               {tickets.map((ticket, index) => {
                  return <TicketCard ticket={ticket} key={index} />;
               })}
            </ScrollView>
         )}
      </View>
   );
}
