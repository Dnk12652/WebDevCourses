import React, { useState } from "react";
import { View, Text, TextInput, KeyboardAvoidingView,StyleSheet, Platform, ScrollView, Pressable, Alert } from "react-native"
const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn,setLoggedIn] = useState(false)
  const onChangeLoginHandler = () => {
    if (email === "" || password === "") {
      Alert.alert("warning!!!","Please Enter valid  email or password")
    } else if (!validateEmail(email)) {
      Alert.alert("warning!!","Please enter valid email id")
    } else if (password.length < 6) {
      Alert.alert("warning!!","Please enter password more than 5 characters")
    } else {
      setLoggedIn(true)
      setTimeout(() => {
        navigation.navigate("Menu")
      }, 5000);
    }
    
  }
  const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {isLoggedIn ? (
        <View>
          <Text style={styles.regularText}>You are logged in</Text>
        </View>
      ) : (
        <View>
          <View style={styles.textInputParent}>
            <Text style={styles.regularText}>Login to continue </Text>
            <TextInput
              style={styles.textInput}
              value={email}
              placeholder="email"
              onChangeText={(value) => setEmail(value)}
              keyboardType={"email-address"}
            />
            <TextInput
              style={styles.textInput}
              value={password}
              placeholder="password"
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={true}
            />
          </View>
            <View style={{ alignItems:"center"}}>
            <Pressable
              onPress={onChangeLoginHandler}
              style={styles.buttonparent}
            >
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </View>
        </View>
      )}
    </ScrollView>
  );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  textInput: {
    margin: 10,
    borderColor: "#EDEFEE",
    backgroundColor: "#EDEFEE",
    padding: 10,
  },
  buttonparent: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: "#EDEFEE",
    borderColor: "#EDEFEE",
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: "green",
  },
});
export default LoginPage