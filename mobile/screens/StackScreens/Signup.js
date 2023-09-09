import {
   View,
   Text,
   Pressable,
   Keyboard,
   ActivityIndicator,
} from "react-native";
import React, { useState } from "react";

import styles from "../../Style/style";

import { MaterialCommunityIcons, AntDesign, Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { useSignup } from "../../hooks/useSignup";

export default function Signup({ navigation }) {
   const [hidePassword, setHidePassword] = useState(true);
   const [hidePasswordConform, setHidePasswordConform] = useState(true);
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [conPassword, setConPassword] = useState("");
   const { signup, isLoading, error } = useSignup();

   const handleSubmit = async () => {
      if (isLoading) {
         return;
      }

      Keyboard.dismiss();

      await signup(username, email, password);
   };
   return (
      <>
         <View style={styles.container}>
            <Text style={styles.titleText}>Sign Up</Text>
            <View>
               <View style={styles.inputContainer}>
                  <MaterialCommunityIcons
                     name="email-outline"
                     size={24}
                     color="grey"
                  />
                  <TextInput
                     style={styles.input}
                     placeholder="Full name"
                     value={username}
                     onChangeText={setUsername}
                  />
               </View>
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
               <View style={styles.inputContainer}>
                  <AntDesign name="lock" size={24} color="grey" />
                  <TextInput
                     style={styles.input}
                     placeholder="Your Password"
                     secureTextEntry={hidePasswordConform}
                     value={conPassword}
                     onChangeText={setConPassword}
                  />
                  <Pressable
                     onPress={() =>
                        setHidePasswordConform(!hidePasswordConform)
                     }
                  >
                     <Feather
                        name={hidePasswordConform == true ? "eye" : "eye-off"}
                        size={24}
                        color="grey"
                     />
                  </Pressable>
               </View>
               {/* Start Button */}
               <View style={styles.callToActionButton}>
                  <Pressable
                     onPress={handleSubmit}
                     style={styles.callToActionPress}
                  >
                     <Text style={styles.callToActionText}>Sign Up</Text>
                  </Pressable>
               </View>
               {/* end Button */}
               <View style={styles.linkView}>
                  <Text>Already Have An Account?</Text>
                  <Pressable onPress={() => navigation.navigate("Signin")}>
                     <Text style={styles.linkColor}> Sign In</Text>
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

// spinnerContainer
