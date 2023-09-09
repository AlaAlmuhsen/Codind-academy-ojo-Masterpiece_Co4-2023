import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";

export default function EventDetails({ navigation, route }) {
   const { params } = route;

   useLayoutEffect(() => {
      navigation.setOptions({
         headerTitle: params.item.eventTitle,
         headerTitleAlign: "center",
      });
   });
   return (
      <View>
         <Text>{params.item.eventTitle}</Text>
      </View>
   );
}
