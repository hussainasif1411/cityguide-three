//Adding all required dependencies
import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";

//Header Page
const Header = (props) => {

    const [searchTerm, setSearchTerm] = useState("");
    //const [restaurantList, setRestaurantList] = useState(props.restaurantList);
    //const [restaurantName, setRestaurantName] = useState(props.restaurantName);

    return (
        <View style={styles.header}>

            <View style={{ width: "10%", alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity onPress={() => props.navigationProp.navigate(props.navigationRoute)}>
                    <Image tintColor='#FFFFF' style={styles.leftArrowIcon} source={require('../assets/left-arrow-icon.png')} />
                </TouchableOpacity>
            </View>

            <View style={{ width: "70%", alignItems: "center", justifyContent: "center" }}>
                <Text style={styles.headerText}>{props.heading}</Text>
            </View>

            <View style={{ marginTop: 8, flexDirection: "row", width: "20%", height: "70%", alignItems: "center", justifyContent: "center" }}>

                <View style={{padding: 3}}>
                    <Image style={styles.searchIcon} source={require('../assets/Search_Icon.png')} />
                </View>

                <View>
                    <TextInput style={styles.searchText} placeholder="Search" placeholderTextColor="#ffffff" value={searchTerm} onChangeText={(text) => {
                        setSearchTerm(text)
                    }} />
                </View>

            </View>

            {/* <View>
                {props.restaurantList.filter((val) => {
                    if (searchTerm === "") {
                        return val
                    }
                    else if (props.restaurantName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map((val, key) => {
                    return (
                        <View key={key} >
                            <Text>
                                {val.restaurantName}
                            </Text>
                        </View>
                    )
                })}
            </View> */}

            {/* <View style={{ width: "10%" }}>
                <TouchableOpacity>
                    <Image style={styles.searchIcon} source={require('../assets/Search_Icon.png')} />
                </TouchableOpacity>
            </View> */}
        </View>
    )
}

//Styling Header Page
const styles = StyleSheet.create({
    header: {
        height: 90,
        width: "100%",
        backgroundColor: '#1E90FF',
        flexDirection: "row",
        alignItems: "center",
        padding: 20
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: "center",
        textTransform: "capitalize"
    },
    leftArrowIcon: {
        tintColor: "#FFFFFF",
        height: 18,
        width: 25,
    },
    searchIcon: {
        tintColor: "#FFFFFF",
        height: 15,
        width: 20,
        
    },
    searchText: {
        color: "black"
    }
});

export default Header;




//Header 2

// import React, { useState } from "react";
// import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";

// //Header Page
// const Header = (props) => {

//     const [searchTerm, setSearchTerm] = useState("");
//     //const [restaurantList, setRestaurantList] = useState(props.restaurantList);
//     //const [restaurantName, setRestaurantName] = useState(props.restaurantName);

//     return (
//         <View style={styles.header}>
//             <View style={{ width: "15%" }}>
//                 <TouchableOpacity onPress={() => props.navigationProp.navigate(props.navigationRoute)}>
//                     <Image style={styles.leftArrowIcon} source={require('../assets/left-arrow-icon.png')} />
//                 </TouchableOpacity>
//             </View>
//             <View style={{ width: "60%" }}>
//                 <Text style={styles.headerText}>{props.heading}</Text>
//             </View>

//             <View style={{ marginTop: 8, flexDirection: "row", width: "30%", height: "70%", backgroundColor: "transparent", alignItems: "center", justifyContent: "center" }}>
//                 <Image style={styles.searchIcon} source={require('../assets/Search_Icon.png')} />
//                 <TextInput style={{ color: "black" }} placeholder="Search" placeholderTextColor="#ffffff" value={searchTerm} onChangeText={(text) => {
//                     setSearchTerm(text)
//                 }} >
//                 </TextInput>
//             </View>

//             {/* <View>
//                 {props.restaurantList.filter((val) => {
//                     if (searchTerm === "") {
//                         return val
//                     }
//                     else if (props.restaurantName.toLowerCase().includes(searchTerm.toLowerCase())) {
//                         return val
//                     }
//                 }).map((val, key) => {
//                     return (
//                         <View key={key} >
//                             <Text>
//                                 {val.restaurantName}
//                             </Text>
//                         </View>
//                     )
//                 })}
//             </View> */}

//             {/* <View style={{ width: "10%" }}>
//                 <TouchableOpacity>
//                     <Image style={styles.searchIcon} source={require('../assets/Search_Icon.png')} />
//                 </TouchableOpacity>
//             </View> */}
//         </View>
//     )
// }

// //Styling Header Page
// const styles = StyleSheet.create({
//     header: {
//         height: 90,
//         width: "100%",
//         backgroundColor: '#1E90FF',
//         flexDirection: "row",
//         alignItems: "center",
//         padding: 20
//     },
//     headerText: {
//         color: '#FFFFFF',
//         fontSize: 18,
//         textAlign: "center",
//         textTransform: "capitalize"
//     },
//     leftArrowIcon: {
//         height: 18,
//         width: 25,
//     },
//     searchIcon: {
//         // height: "40%",
//         // width: "6%",
//         height: 15,
//         width: 20,
//         padding: 3
//     },
//     // searchText: {
//     //     height: 20,
//     //     width: "80%",
//     //     height: 18,
//     //     width: 25,
//     //     flex: 1,
//     //     color: "black",
//     //     backgroundColor: "#FFFFFF" 
//     // },
// });

// export default Header;



// import React from "react";
// import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

// //Header Page
// const Header = (props) => {
//     return (
//         <View style={styles.header}>
//             <View style={{ width: "10%" }}>
//                 <TouchableOpacity>
//                     <Image style={styles.leftArrowIcon} source={require('../assets/left-arrow-icon.png')}/>
//                 </TouchableOpacity>
//             </View>
//             <View style={{ width: "80%" }}>
//                 <Text style={styles.headerText}>Browse {props.heading}</Text>
//             </View>
//             <View style={{ width: "10%" }}>
//                 <TouchableOpacity>
//                     <Image style={styles.searchIcon} source={require('../assets/Search_Icon.png')} />
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }

// //Styling Header Page
// const styles = StyleSheet.create({
//     header: {
//         height: 90,
//         width: "100%",
//         backgroundColor: '#1E90FF',
//         flexDirection: "row",
//         alignItems: "center",
//         padding: 20
//     },
//     headerText: {
//         color: '#FFFFFF',
//         fontSize: 18,
//         textAlign: "center",
//         textTransform: "capitalize"
//     },
//     leftArrowIcon: {
//         height: 18,
//         width: 25,
//     },
//     searchIcon: {
//         // height: "40%",
//         // width: "6%",
//         height: 18,
//         width: 25,
//     },
// });

// export default Header;