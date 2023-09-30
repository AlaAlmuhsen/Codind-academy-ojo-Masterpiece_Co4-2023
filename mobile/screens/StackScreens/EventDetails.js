import { View, Text, Image, Button, Touchable, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../../Style/style";
import { Feather, Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function EventDetails({ navigation, route }) {
   const { params } = route;
   const { navigate } = useNavigation();
   const item = params.item;
   useLayoutEffect(() => {
      navigation.setOptions({
         headerTitle: params.item.eventTitle,
         headerTitleAlign: "left",
      });
   });
   return (
      <>
         <ScrollView
            style={{
               backgroundColor: "white",
               position: "relative",
               height: 4000,
            }}
         >
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
                     <View>
                        <Text
                           style={{ flex: 1, fontWeight: "500", fontSize: 16 }}
                        >
                           {params.item.DateOfEvent}
                        </Text>
                        <Text
                           style={{ flex: 1, fontWeight: "400", fontSize: 16 }}
                        >
                           {params.item.timeOfEvent}
                        </Text>
                     </View>
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
               <View style={{ marginTop: 10 }}>
                  <Text style={{ fontSize: 24, marginBottom: 5 }}>
                     About Event
                  </Text>
                  <Text
                     style={{
                        fontSize: 17,
                        color: "grey",
                        fontWeight: "bold",
                        lineHeight: 25,
                     }}
                  >
                     {params.item.aboutEvent}
                  </Text>
               </View>
            </View>
         </ScrollView>
         <Pressable
            onPress={() => navigate("Purchase", { item })}
            style={{
               justifyContent: "center",
               display: "flex",
               alignItems: "center",
               paddingBottom: 10,
            }}
         >
            <View
               style={{
                  width: "80%",
                  backgroundColor: "#C83B3B",
                  height: 55,
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
               }}
            >
               <Text style={{ color: "white", fontWeight: 600, fontSize: 18 }}>
                  Buy Ticket ${params.item.price}
               </Text>
            </View>
         </Pressable>
      </>
   );
}
