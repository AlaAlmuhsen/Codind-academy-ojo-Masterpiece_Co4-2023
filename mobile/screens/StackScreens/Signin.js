import {
   View,
   Text,
   Image,
   TextInput,
   Pressable,
   Keyboard,
   ActivityIndicator,
} from "react-native";
import React, { useState } from "react";

import logo from "../../assets/logo/ticketmaster-high-resolution-logo-color-on-transparent-background.png";
import { MaterialCommunityIcons, AntDesign, Feather } from "@expo/vector-icons";

import styles from "../../Style/style";
import { useSignin } from "../../hooks/useSignin";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Signin({ navigation, route }) {
   const [hidePassword, setHidePassword] = useState(true);

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const { signin, isLoading, error } = useSignin();

   const handleSubmit = async () => {
      if (isLoading) {
         return;
      }

      Keyboard.dismiss();

      await signin(email, password);
   };

   return (
      <>
         <View style={styles.container}>
            <View style={styles.logocontainer}>
               <Image source={logo} style={styles.logo} />
            </View>
            <Text style={styles.titleText}>Sign In</Text>
            <View>
               <View style={styles.inputContainer}>
                  <MaterialCommunityIcons
                     name="email-outline"
                     size={24}
                     color="grey"
                  />
                  <TextInput
                     style={styles.input}
                     placeholder="abc@gmail.com"
                     value={email}
                     onChangeText={setEmail}
                  />
               </View>
               <View style={styles.inputContainer}>
                  <AntDesign name="lock" size={24} color="grey" />
                  <TextInput
                     style={styles.input}
                     placeholder="Your Password"
                     secureTextEntry={hidePassword}
                     value={password}
                     onChangeText={setPassword}
                  />
                  <Pressable onPress={() => setHidePassword(!hidePassword)}>
                     <Feather
                        name={hidePassword == true ? "eye" : "eye-off"}
                        size={24}
                        color="grey"
                     />
                  </Pressable>
               </View>
               <View style={styles.formOptions}>
                  {/* <Text>a</Text> */}
                  <Text>forgot Password?</Text>
               </View>
               {/* Start Button */}
               <View style={styles.callToActionButton}>
                  <Pressable
                     onPress={handleSubmit}
                     style={styles.callToActionPress}
                  >
                     <Text style={styles.callToActionText}>Sign In</Text>
                  </Pressable>
               </View>
               {/* end Button */}
               <View style={styles.linkView}>
                  <Text>Dont Have An Account?</Text>
                  <Pressable onPress={() => navigation.navigate("Signup")}>
                     <Text style={styles.linkColor}> Sign Up</Text>
                  </Pressable>
               </View>
               {/* error */}
               {error && (
                  <View style={styles.errorBox}>
                     <Text style={styles.errorText}>{error}</Text>
                  </View>
               )}
               {/* error */}
            </View>
         </View>
         {isLoading && (
            <View style={styles.spinnerContainer}>
               <ActivityIndicator size={100} color="#C83B3B" />
            </View>
         )}
      </>
   );
}
