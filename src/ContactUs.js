//Adding all required dependencies
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

const ContactUs = () => {

  //Setting states
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[message, setMessage] = useState("");

  //Contact Us page
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require('../assets/contact-us.jpg')} />
      </View>
      <View style={{ padding: 30}}>
        <View style={{ width: "90%", alignItems: "center"}} >
          <Text style={styles.contactText}>GET IN TOUCH!!</Text>
          <Text style={styles.tagline}>Send a message and we'll respond as soon as possible</Text>
        </View>
        <View style={{ marginTop: 5, alignItems: "center" }}>
          <TextInput style={styles.inputField} placeholder="Name" onChangeText={(text) => setName(text)} />
          <TextInput style={styles.inputField} placeholder="Email" onChangeText={(text) => setEmail(text)} />
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.message} placeholder="Message" onChangeText={(text) => setMessage(text)} />
        </View>
      </View>
      <View >
        <TouchableOpacity style={{ paddingLeft: 150 }}>
          <Image style={styles.sendIcon} source={require('../assets/send-icon-blue.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default ContactUs;

//Styling Contact Us page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  header: {
    height: 220,
  },
  image: {
    height: 220,
    width: '100 %',
    position: 'absolute'
  },
  contactText: {
    fontSize: 18,
    textAlign: "center",
    marginLeft: 12
  },
  tagline: {
    color: '#585858',
    fontSize: 14,
    marginTop: 3,
    marginLeft: 12
    //textAlign: "center"
  },
  inputField: {
    width: '85%',
    height: 45,
    marginTop: 15,
    //marginBottom: 25,
    borderWidth: 1,
    borderColor: '#C8C8C8',
  },
  message: {
    width: '85%',
    marginTop: 15,
    borderBottomWidth: 1,
    borderColor: '#C8C8C8',
    height: 80,
    borderWidth: 1,
    textAlignVertical: 'top'
  },
  sendIcon: {
    height: 50,
    width: 50,
  }
});