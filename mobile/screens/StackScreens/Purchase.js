import { useNavigation } from "@react-navigation/native";
import React from "react";
import { AntDesign, FontAwesome, Fontisto, Entypo } from "@expo/vector-icons";
import { View, Text, Pressable } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import styles from "../../Style/style";

export default function Purchase({ route }) {
   // const { navigate } = useNavigation();
   const { params } = route;
   console.log(params.item);
   return (
      <ScrollView style={styles.container}>
         <View
            style={{
               justifyContent: "center",
               alignItems: "center",
               marginTop: 20,
               marginBottom: 40,
            }}
         >
            <AntDesign name="shoppingcart" size={44} color="#C83B3B" />
            <Text style={{ fontSize: 24, color: "#C83B3B" }}>Summary</Text>
         </View>
         <View
            style={{
               display: "flex",
               flexDirection: "row",
               justifyContent: "space-between",
               paddingLeft: 10,
               paddingRight: 10,
            }}
         >
            <Text style={{ fontSize: 20 }}>{params.item.eventTitle}</Text>
            <Text style={{ fontSize: 20 }}>{params.item.price}$</Text>
         </View>
         <View
            style={{
               display: "flex",
               flexDirection: "row",
               justifyContent: "space-between",
               paddingLeft: 10,
               paddingRight: 10,
               marginTop: 20,
            }}
         >
            <FontAwesome name="cc-visa" size={28} color="#C83B3B" />
            <Fontisto name="mastercard" size={28} color="#C83B3B" />
            <Entypo name="paypal" size={28} color="#C83B3B" />
         </View>
         <View style={{ marginTop: 20, display: "flex", gap: 20 }}>
            <TextInput
               style={{ borderBottomColor: "grey", borderBottomWidth: 2 }}
               placeholder="Card Holder Name"
            />
            <TextInput
               style={{ borderBottomColor: "grey", borderBottomWidth: 2 }}
               placeholder="Card Number"
            />
            <View
               style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: 20,
               }}
            >
               <TextInput
                  style={{
                     borderBottomColor: "grey",
                     borderBottomWidth: 2,
                     flex: 1,
                  }}
                  placeholder="Exp Date"
                  
               />
               <TextInput
                  style={{
                     borderBottomColor: "grey",
                     borderBottomWidth: 2,
                     flex: 1,
                  }}
                  placeholder="CVC"
               />
            </View>
            <View style={{ marginTop: 20 }}>
               <Pressable
                  style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     backgroundColor: "#C83B3B",
                     padding: 10,
                     borderRadius: 10,
                  }}
               >
                  <Text style={{ fontSize: 24, color: "white" }}>Pay Now</Text>
               </Pressable>
            </View>
         </View>
      </ScrollView>
   );
}
