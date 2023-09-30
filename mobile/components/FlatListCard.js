import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../Style/style";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

export default function FlatListCard({ item }) {
   const { navigate } = useNavigation();
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
            source={{
               uri: item.eventBackgroundimage,
            }}
            style={{
               width: "100%",
               height: "60%",
               borderRadius: 10,
               marginBottom: 10,
            }}
         />
         <Text style={styles.headerh1}>{item.eventTitle}</Text>
         <Text style={{ marginTop: 15, color: "grey", fontSize: 18 }}>
            <Entypo name="location-pin" size={24} color="grey" />
            {item.location}
         </Text>
         <View
            style={{
               position: "absolute",
               top: 20,
               left: 20,
               width: 40,
               height: 40,
               backgroundColor: "red",
               alignItems: "center",
               justifyContent: "center",
               borderRadius: 5,
               backgroundColor: "white",
               opacity: 1,
            }}
         >
            <Text style={{ color: "#C83B3B", fontWeight: "bold" }}>
               {item.DateOfEvent.split(" ")[0]}
            </Text>
            <Text style={{ color: "#C83B3B", fontWeight: "bold" }}>
               {item.DateOfEvent.split(" ")[1].split("", 3)}
            </Text>
         </View>
      </TouchableOpacity>
   );
}
