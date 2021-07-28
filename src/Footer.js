//Adding all required dependencies
import React, {useState} from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

//Footer Page
const Footer = ({ props }) => {
    // alert(JSON.stringify(props));

    const[dynamicColor, setDynamicColor] = useState("");
    const[isPressed, setIsPressed] = useState(false);

    const changeColor = () => {
        if(isPressed){
            setDynamicColor("blue");
        }
    }

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
                <TouchableOpacity style={{backgroundColor: dynamicColor}} onPress={() => {
                    setIsPressed(true);
                    changeColor();
                    props.navigate('BrowseCategories')
                }
                }>
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
                <TouchableOpacity onPress={() => props.navigate('ContactUs')}>
                    <View style={styles.imageView}>
                        <Image style={styles.contactUsIcon} source={require('../assets/contact-us-icon.png')}></Image>
                    </View>

                    <View>
                        <Text style={styles.footerTabText}>Contact Us</Text>
                    </View>

                </TouchableOpacity>
            </View>
        </View>
    )
}

//Styling Footer Page
const styles = StyleSheet.create({
    footer: {
        height: 60,
        backgroundColor: '#FFFFFF',
        flexDirection: "row",
        paddingHorizontal: 25,
        paddingVertical: 20,
        borderTopWidth: 0.5,
        borderTopColor: "#A9A9A9",
        //backgroundColor: '#1E90FF',
        //elevation: 5
    },
    seperateFoooterTab: {
        //tintColor: {dynamicColor},
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
        height: 20,
        width: 20,
    },
    footerTabText: {
        color: '#585858',
    },
    contactUsIcon: {
        height: 20,
        width: 20,
        tintColor: "#585858"
    }
});

export default Footer;