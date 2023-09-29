import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../../Style/style";
import { Feather, Entypo, Ionicons } from "@expo/vector-icons";

export default function EventDetails({ navigation, route }) {
   const { params } = route;

   useLayoutEffect(() => {
      navigation.setOptions({
         headerTitle: params.item.eventTitle,
         headerTitleAlign: "left",
      });
   });
   return (
      <ScrollView style={{ backgroundColor: "white" }}>
         <Image
            source={{ uri: params.item.eventBackgroundimage }}
            style={{ width: "100%", height: 200 }}
         />
         <View style={styles.container}>
            <Text style={{ marginTop: 30, fontSize: 32 }}>
               {params.item.eventTitle}
            </Text>
            <View
               style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 10,
               }}
            >
               <View
                  style={{
                     display: "flex",
                     flexDirection: "row",
                     padding: 10,
                  }}
               >
                  <Feather
                     name="calendar"
                     size={28}
                     color="#C83B3B"
                     style={{
                        marginRight: 15,
                        backgroundColor: "#f8e8e8",
                        padding: 8,
                        fontWeight: "bold",
                        borderRadius: 10,
                     }}
                  />
                  <Text style={{ flex: 1, fontWeight: "500", fontSize: 16 }}>
                     {params.item.DateOfEvent}
                  </Text>
               </View>
            </View>
            <View
               style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 10,
               }}
            >
               <View
                  style={{
                     display: "flex",
                     flexDirection: "row",
                     padding: 10,
                  }}
               >
                  <Entypo
                     name="location-pin"
                     size={28}
                     color="#C83B3B"
                     style={{
                        marginRight: 15,
                        backgroundColor: "#f8e8e8",
                        padding: 8,
                        fontWeight: "bold",
                        borderRadius: 10,
                     }}
                  />
                  <Text style={{ flex: 1, fontWeight: "500", fontSize: 16 }}>
                     {params.item.location}
                  </Text>
               </View>
            </View>
            <View
               style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 10,
               }}
            >
               <View
                  style={{
                     display: "flex",
                     flexDirection: "row",
                     padding: 10,
                  }}
               >
                  <Ionicons
                     name="person"
                     size={28}
                     color="#C83B3B"
                     style={{
                        marginRight: 15,
                        backgroundColor: "#f8e8e8",
                        padding: 8,
                        fontWeight: "bold",
                        borderRadius: 10,
                     }}
                  />
                  <Text style={{ flex: 1, fontWeight: "500", fontSize: 16 }}>
                     {params.item.eventOrganizer}
                  </Text>
               </View>
            </View>
            <View>
               <Text></Text>
            </View>
         </View>
      </ScrollView>
   );
}
