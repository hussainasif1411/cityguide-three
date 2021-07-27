//Adding all required dependencies
import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

//Footer Page
const Footer = ({ props }) => {
    // alert(JSON.stringify(props));
    return (

        <View style={styles.footer} >

            <View style={styles.seperateFoooterTab}>
                <TouchableOpacity>
                    <View style={styles.imageView}>
                        <Image style={styles.footerIcon} source={require('../assets/world-icon.jpeg')}></Image>
                    </View>

                    <View>
                        <Text style={styles.footerTabText}>Location</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.seperateFoooterTab}>
                <TouchableOpacity onPress={() => props.navigate('BrowseCategories')}>
                    <View style={styles.imageView}>
                        <Image style={styles.footerIcon} source={require('../assets/hamburger-menu-icon.png')}></Image>
                    </View>

                    <View>
                        <Text style={styles.footerTabText}>Browse</Text>
                    </View>

                </TouchableOpacity>
            </View>

            <View style={styles.seperateFoooterTab}>
                <TouchableOpacity>
                    <View style={styles.imageView}>
                        <Image style={styles.footerIcon} source={require('../assets/heart.jpeg')}></Image>
                    </View>

                    <View>
                        <Text style={styles.footerTabText}>Favorites</Text>
                    </View>

                </TouchableOpacity>
            </View>

            <View style={styles.seperateFoooterTab}>
                <TouchableOpacity>
                    <View style={styles.imageView}>
                        <Image style={styles.footerIcon} source={require('../assets/profile-icon.png')}></Image>
                    </View>

                    <View>
                        <Text style={styles.footerTabText}>Profile</Text>
                    </View>

                </TouchableOpacity>
            </View>
        </View>
    )
}

//Styling Footer Page
const styles = StyleSheet.create({
    footer: {
        height: 80,
        backgroundColor: '#FBFCFC',
        flexDirection: "row",
        paddingHorizontal: 25,
        paddingVertical: 20
    },
    seperateFoooterTab: {
        width: "25%",
        flexDirection: "column",
        opacity: 0.5,
        justifyContent: "center",
        alignItems: "center",
    },
    imageView: {
        alignItems: "center"
    },
    footerIcon: {
        height: 30,
        width: 30,
    },
    footerTabText: {
        color: '#585858',
    }
});

export default Footer;