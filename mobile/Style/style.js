import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   spinnerContainer: {
      position: "relative",
      zIndex: 2,
      backgroundColor: "#fff",
      height: "100%",
      justifyContent: "center",
   },
   container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingLeft: 20,
      paddingRight: 20,
      position: "relative",
   },
   logocontainer: {
      width: "100%",
      height: 150,
      position: "relative",
      alignItems: "center",
   },
   logo: {
      position: "absolute",
      height: "60%",
      width: "60%",
      objectFit: "contain",
      padding: 70,
   },
   titleText: {
      fontWeight: "bold",
      fontSize: 24,
      marginBottom: 15,
   },
   inputContainer: {
      borderWidth: 1,
      borderColor: "grey",
      borderRadius: 10,
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 10,
      paddingRight: 10,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
   },
   input: {
      backgroundColor: "white",
      flex: 1,
      marginLeft: 5,
   },
   formOptions: {
      flexDirection: "row",
      justifyContent: "flex-end",
      padding: 5,
      marginBottom: 20,
   },
   callToActionButton: {
      backgroundColor: "#C83B3B",
      width: "80%",
      alignSelf: "center",
      borderRadius: 10,
      marginBottom: 15,
   },
   callToActionPress: {
      padding: 15,
   },
   callToActionText: {
      textAlign: "center",
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
   },
   linkView: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
   },

   linkColor: {
      color: "blue",
   },
   errorBox: {
      marginTop: 30,
      width: "80%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      marginLeft: "auto",
      marginRight: "auto",
   },
   errorText: {
      borderWidth: 1,
      borderColor: "red",
      textAlign: "center",
      padding: 10,
      color: "red",
      borderRadius: 10,
   },
   searchBox: {
      flexDirection: "row",
      width: "100%",
      padding: 5,
   },
   textInput: {
      color: "white",
      paddingLeft: 8,
      flex: 1,
   },
   searchBoxContainer: {
      backgroundColor: "#C83B3B",
      height: 80,
      borderBottomEndRadius: 20,
      borderBottomStartRadius: 20,
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: "center",
   },
   flatListContainer: {
      height: 300,
   },
   headerh1: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
   },
   headerh2: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
   },
});

export default styles;
