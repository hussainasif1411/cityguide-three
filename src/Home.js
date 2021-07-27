//Adding all required dependencies
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

//Home Page
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <ImageBackground style={styles.bgImage} source={require('../assets/cityguide-bg-image-4.jpg')}>

        <View style={{ marginTop: 160 }}>
          <Text style={styles.headerText}>Cityguide</Text>
        </View>

        <View style={{ marginTop: 90, marginLeft: 30, }}>
          <Text style={styles.tagline}>Explore the best places of the  world's most vibrant cities!</Text>
        </View>

        <View style={{ marginTop: 90 }}>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground >

    </View>
  )
}

//Styling Home Page
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgImage: {
    flex: 1,
    alignItems: 'center'
  },
  headerText: {
    fontSize: 70,
    color: '#FFFFFF',
    fontFamily: 'cursive',
    fontWeight: "bold"
  },
  tagline: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center'
  },
  loginButton: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 310,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
  },
  registerButton: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 310,
    borderRadius: 5,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFFFFF'
  },
  loginButtonText: {
    color: '#1E90FF',
    fontSize: 18,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default Home;