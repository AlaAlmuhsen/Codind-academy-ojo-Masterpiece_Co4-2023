import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../Style/style";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

export default function FlatListCard({ item }) {
   const { navigate } = useNavigation();
   console.log(item);
   return (
      <TouchableOpacity
         style={{
            backgroundColor: "white",
            width: 245,
            marginRight: 5,
            borderRadius: 10,
            height: 250,
            padding: 8,
         }}
         onPress={() => navigate("EventDetails", { item })}
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
         <Text style={styles.headerh2}>{item.eventTitle}</Text>
         <Text>
            <Entypo name="location-pin" size={24} color="black" />
            {item.location}
         </Text>
         <Text>Price</Text>
      </TouchableOpacity>
   );
}
