// //*********************************************************APP.JS******************************************************************//

import React from 'react';
import AppRoute from './routes/AppRoutes';
//import { View, Text } from "react-native";

const App = () => {
  return (
    //Routes for the pages of app
    <AppRoute />
    // <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
    //   <Text>Hello World</Text>
    // </View>
  )
}
export default App;

//*************************************************************Contact Us****************************************************************/

// //Adding all required dependencies
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

// const App = () => {

//   //Defining states
//   const[name, setName] = useState("");
//   const[email, setEmail] = useState("");
//   const[message, setMessage] = useState("");

//   //Contact Us page
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Image style={styles.image} source={require('./assets/contact-us.jpg')} />
//       </View>
//       <View style={{ padding: 30}}>
//         <View style={{ width: "90%", alignItems: "center"}} >
//           <Text style={styles.contactText}>GET IN TOUCH!!</Text>
//           <Text style={styles.tagline}>Send a message and we'll respond as soon as possible</Text>
//         </View>
//         <View style={{ marginTop: 5, alignItems: "center" }}>
//           <TextInput style={styles.inputField} placeholder="Name" onChangeText={(text) => setName(text)} />
//           <TextInput style={styles.inputField} placeholder="Email" onChangeText={(text) => setEmail(text)} />
//           <TextInput
//             multiline={true}
//             numberOfLines={10}
//             style={styles.message} placeholder="Message" onChangeText={(text) => setMessage(text)} />
//         </View>
//       </View>
//       <View >
//         <TouchableOpacity style={{ paddingLeft: 150 }}>
//           <Image style={styles.sendIcon} source={require('./assets/send-icon-blue.png')} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// }
// export default App;

// //Styling Contact Us page
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//   },
//   header: {
//     height: 220,
//   },
//   image: {
//     height: 220,
//     width: '100 %',
//     position: 'absolute'
//   },
//   contactText: {
//     fontSize: 18,
//     textAlign: "center",
//     marginLeft: 12
//   },
//   tagline: {
//     color: '#585858',
//     fontSize: 14,
//     marginTop: 3,
//     marginLeft: 12
//     //textAlign: "center"
//   },
//   inputField: {
//     width: '85%',
//     height: 45,
//     marginTop: 15,
//     backgroundColor: "#FFFFFF",
//     //marginBottom: 25,
//     borderWidth: 1,
//     borderColor: '#C8C8C8',
//   },
//   message: {
//     width: '85%',
//     marginTop: 15,
//     borderBottomWidth: 1,
//     borderColor: '#C8C8C8',
//     height: 80,
//     borderWidth: 1,
//     textAlignVertical: 'top'
//   },
//   sendIcon: {
//     height: 50,
//     width: 50,

//   }
// });

//*******************************************************Particular Item*************************************************************** */

// import React from 'react';
// import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import Footer from './src/Footer';

// const App = () => {

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//       <View style={styles.header}>
//         <View style={{ width: "20%" }}>
//           <TouchableOpacity >
//             <Image style={styles.leftArrowIcon} source={require('./assets/left-arrow-icon.png')} />
//           </TouchableOpacity>
//         </View>
//         <View style={{ width: "60%" }}>
//           <Text style={styles.headerText}>Blue Hill</Text>
//         </View>

//         <View style={{ width: "30%", alignItems: "center", justifyContent: "center" }}>
//           <Image style={styles.blackHeartIcon} source={require('./assets/white-heart.png')} />
//         </View>

//       </View>

//       <View>
//         <Image style={styles.itemImage} source={require('./assets/burger.jpg')} />
//         <View style={{ marginTop: 65, padding: 15 }}>
//           <Text style={styles.itemText}>Blue Hill</Text>
//           <View style={{ flexDirection: "row" }}>
//             <View style={{ width: "60%", flexDirection: "row" }}>
//               <Image style={styles.gpsIcon} source={require('./assets/gps-red.png')} />
//               <Text style={styles.smallText}>Washington</Text>
//             </View>
//             <View style={{ width: "40%", flexDirection: "row", marginLeft: 20 }}>
//               <Image style={styles.gpsIcon} source={require('./assets/star.png')} />
//               <Text style={styles.smallText}>Rating</Text>
//             </View>

//           </View>

//         </View>

//       </View>

//       <View style={{ padding: 30 }}>
//         <Text style={styles.itemDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
//       </View>

//       <View style={{ flexDirection: "row", height: 55, backgroundColor: "#1E90FF", padding: 10 }}>
//         <View style={{flexDirection: "row", width: "50%" }}>
//           <Image style={styles.gpsIcon} source={require('./assets/smartphone.png')} />
//           <Text style={styles.contactText}>47474378438</Text>
//         </View>
//         <View style={{flexDirection: "row", width: "50%"}}>
//         <Image style={styles.gpsIcon} source={require('./assets/mail.png')} />
//           <Text style={styles.contactText}>47474378438</Text>
//         </View>
//       </View>

//       <View>

//       </View>


//       </ScrollView>
//       <Footer />
//     </View>

//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     height: 70,
//     width: "100%",
//     backgroundColor: '#1E90FF',
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 20
//   },
//   headerText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     textAlign: "center",
//     textTransform: "capitalize"
//   },
//   leftArrowIcon: {
//     height: 18,
//     width: 25,
//   },
//   blackHeartIcon: {
//     // height: "40%",
//     // width: "6%",
//     height: 20,
//     width: 20,
//     padding: 3,
//     // backgroundColor: "transparent"
//   },
//   itemImage: {
//     height: 180,
//     width: "100%",
//     position: "absolute"
//   },
//   itemText: {
//     fontSize: 35,
//     color: "#FFFFFF"
//   },
//   smallText: {
//     fontSize: 18,
//     color: "#FFFFFF",
//     marginLeft: 5
//   },
//   gpsIcon: {
//     height: 15,
//     width: 15,
//     marginTop: 7,
//     marginLeft: 4
//   },
//   itemDescription: {
//     lineHeight: 18,
//     color: '#A9A9A9',
//   },
//   contactText: {
//     padding: 5
//   }
// });

// export default App;


//**************************************************************Google Maps*****************************************************//

// import React, { useState } from "react";
// import {View} from 'react-native';
// import MapView from "react-native-maps";

// const App = () => {
//   const [region, setRegion] = useState({
//     latitude: 51.5079145,
//     longitude: -0.0899163,
//     latitudeDelta: 0.01,
//     longitudeDelta: 0.01
//   });

//   return (
//     <View style={{ flex: 1 }}>
//       <MapView
//         style={{ flex: 1, width: "80%" }}
//         region={region}
//         onRegionChangeComplete={region => setRegion(region)}
//       />
//     </View>

//   );
// };

// export default App;



// // import React, { useState } from "react";
// // import { View, Text } from "react-native";

// // import MapView, { Marker } from "react-native-maps";

// // const CustomMarker = () => (
// //   <View
// //     style={{
// //       paddingVertical: 10,
// //       paddingHorizontal: 30,
// //       backgroundColor: "#007bff",
// //       borderColor: "#eee",
// //       borderRadius: 5,
// //       elevation: 10
// //     }}
// //   >
// //     <Text style={{ color: "#fff" }}>Berlin</Text>
// //   </View>
// // );

// // const App = () => {
// //   const [region, setRegion] = useState({
// //     latitude: 52.5200066,
// //     longitude: 13.404954,
// //     latitudeDelta: 0.005,
// //     longitudeDelta: 0.005
// //   });

// //   return (
// //     <MapView
// //       style={{ flex: 1, width: "80%", height: "80%" }}
// //       region={region}
// //       onRegionChangeComplete={region => setRegion(region)}
// //     >
// //       <Marker coordinate={{ latitude: 52.5200066, longitude: 13.404954 }}>
// //         <CustomMarker />
// //       </Marker>
// //     </MapView>
// //   );
// // };

// // export default App;



// // Integration of Google map in React Native using react-native-maps
// // https://aboutreact.com/react-native-map-example/

// // Import React
// import React from 'react';
// // Import required components
// import {SafeAreaView, StyleSheet, View} from 'react-native';

// // Import Map and Marker
// import MapView, {Marker} from 'react-native-maps';

// const App = () => {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <MapView
//           style={styles.mapStyle}
//           initialRegion={{
//             latitude: 37.78825,
//             longitude: -122.4324,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//           customMapStyle={mapStyle}>
//           <Marker
//             draggable
//             coordinate={{
//               latitude: 37.78825,
//               longitude: -122.4324,
//             }}
//             onDragEnd={
//               (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
//             }
//             title={'Test Marker'}
//             description={'This is a description of the marker'}
//           />
//         </MapView>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const mapStyle = [
//   {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
//   {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
//   {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
//   {
//     featureType: 'administrative.locality',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'poi',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'geometry',
//     stylers: [{color: '#263c3f'}],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#6b9a76'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry',
//     stylers: [{color: '#38414e'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry.stroke',
//     stylers: [{color: '#212a37'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#9ca5b3'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry',
//     stylers: [{color: '#746855'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry.stroke',
//     stylers: [{color: '#1f2835'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#f3d19c'}],
//   },
//   {
//     featureType: 'transit',
//     elementType: 'geometry',
//     stylers: [{color: '#2f3948'}],
//   },
//   {
//     featureType: 'transit.station',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'geometry',
//     stylers: [{color: '#17263c'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#515c6d'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.stroke',
//     stylers: [{color: '#17263c'}],
//   },
// ];

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },
//   mapStyle: {
//     flex: 1,
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
// });



// //API Key = AIzaSyDfUtEZQRRdRMsBzTva7W_-bVDqiOvMkS4
// {/* <meta-data
//       android:name="com.google.android.geo.API_KEY"
//       android:value="AIzaSyDfUtEZQRRdRMsBzTva7W_-bVDqiOvMkS4"
//       /> */}


// //*******************************************Pagination Demo************************************************************/

// // //React Native FlatList Pagination to Load More Data dynamically – Infinite List
// // //https://aboutreact.com/react-native-flatlist-pagination-to-load-more-data-dynamically-infinite-list/

// // //import React in our code
// // import React, {useState, useEffect} from 'react';

// // //import all the components we are going to use
// // import {
// //   SafeAreaView,
// //   View,
// //   Text,
// //   TouchableOpacity,
// //   StyleSheet,
// //   FlatList,
// //   ActivityIndicator,
// // } from 'react-native';

// // const App = () => {
// //   const [loading, setLoading] = useState(true);
// //   const [dataSource, setDataSource] = useState([]);
// //   const [offset, setOffset] = useState(1);

// //   useEffect(() => getData(), []);

// //   const getData = () => {
// //     console.log('getData');
// //     setLoading(true);
// //     //Service to get the data from the server to render
// //     fetch('https://aboutreact.herokuapp.com/getpost.php?offset='
// //           + offset)
// //       //Sending the currect offset with get request
// //       .then((response) => response.json())
// //       .then((responseJson) => {
// //         //Successful response
// //         setOffset(offset + 1);
// //         //Increasing the offset for the next API call
// //         setDataSource([...dataSource, ...responseJson.results]);
// //         setLoading(false);
// //       })
// //       .catch((error) => {
// //         console.error(error);
// //       });
// //   };

// //   const renderFooter = () => {
// //     return (
// //       //Footer View with Load More button
// //       <View style={styles.footer}>
// //         <TouchableOpacity
// //           activeOpacity={0.9}
// //           onPress={getData}
// //           //On Click of button load more data
// //           style={styles.loadMoreBtn}>
// //           <Text style={styles.btnText}>Load More</Text>
// //           {loading ? (
// //             <ActivityIndicator
// //               color="white"
// //               style={{marginLeft: 8}} />
// //           ) : null}
// //         </TouchableOpacity>
// //       </View>
// //     );
// //   };

// //   const ItemView = ({item}) => {
// //     return (
// //       // Flat List Item
// //       <Text
// //         style={styles.itemStyle}
// //         onPress={() => getItem(item)}>
// //         {item.id}
// //         {'.'}
// //         {item.title.toUpperCase()}
// //       </Text>
// //     );
// //   };

// //   const ItemSeparatorView = () => {
// //     return (
// //       // Flat List Item Separator
// //       <View
// //         style={{
// //           height: 0.5,
// //           width: '100%',
// //           backgroundColor: '#C8C8C8',
// //         }}
// //       />
// //     );
// //   };

// //   const getItem = (item) => {
// //     //Function for click on an item
// //     alert('Id : ' + item.id + ' Title : ' + item.title);
// //   };

// //   return (
// //     <SafeAreaView style={{flex: 1}}>
// //       <View style={styles.container}>
// //         <FlatList
// //           data={dataSource}
// //           keyExtractor={(item, index) => index.toString()}
// //           ItemSeparatorComponent={ItemSeparatorView}
// //           enableEmptySections={true}
// //           renderItem={ItemView}
// //           ListFooterComponent={renderFooter}
// //         />
// //       </View>
// //     </SafeAreaView>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     justifyContent: 'center',
// //     flex: 1,
// //   },
// //   footer: {
// //     padding: 10,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     flexDirection: 'row',
// //   },
// //   loadMoreBtn: {
// //     padding: 10,
// //     backgroundColor: '#800000',
// //     borderRadius: 4,
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   btnText: {
// //     color: 'white',
// //     fontSize: 15,
// //     textAlign: 'center',
// //   },
// // });

// // export default App;


// //********************************Fetching data from API**************************************//

// // import React, { useState }  from 'react';
// // import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
// // import Axios from 'axios';

// // const App = () => {

// //   const [userData, setUserData] = useState([]);

// //   // const getDataUsingSimpleGetCall = () => {
// //     Axios
// //       .get('https://jsonplaceholder.typicode.com/todos/1')
// //       .then(function (response) {
// //         //alert(JSON.stringify(response.data));
// //         setUserData(response.data);
// //       })
// //       .catch(function (error) {
// //         alert(error.message);
// //       })
// //   // };
// //   return (
// //     <View style={styles.container}>
// //       <Text>Hello World</Text>
// //       <Text>{userData.title}</Text>
// //       {/* <TouchableOpacity
// //         style={styles.buttonStyle}
// //         onPress={getDataUsingSimpleGetCall}>
// //         <Text>Get Call</Text>
// //       </TouchableOpacity> */}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     justifyContent: 'center',
// //     flex: 1,
// //     padding: 16,
// //   },
// //   buttonStyle: {
// //     alignItems: 'center',
// //     backgroundColor: '#DDDDDD',
// //     padding: 10,
// //     width: '100%',
// //     marginTop: 16,
// //   },
// // });

// // export default App;

// //***********************************Browse Categories*******************************************//

// // import React from "react";
// // import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
// // import Header from "./src/Header";
// // import Footer from "./src/Footer";

// // const App = ({ navigation }) => {
// //   return (
// //     <View style={styles.container}>
// //       <Header heading="Browse Categories" />
// //       <ScrollView>

// //         <View style={styles.browseCategoryRowFlex}>
// //           <View style={styles.columnViewStyle}>
// //             <TouchableOpacity onPress={() => navigation.navigate('BrowseRestaurants')}>
// //               <Image style={styles.browseImageIcon} source={require('./assets/restaurant-icon.png')} />
// //               <Text style={styles.categoriesText}>Restaurants</Text>
// //             </TouchableOpacity>
// //           </View>
// //           <View style={styles.columnViewStyle}>
// //             <TouchableOpacity>
// //               <Image style={styles.browseImageIcon} source={require('./assets/hotel-icon.jpg')} />
// //               <Text style={styles.categoriesText}>Hotels</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </View>

// //         <View style={styles.browseCategoryRowFlex}>
// //           <View style={styles.columnViewStyle}>
// //             <TouchableOpacity>
// //               <Image style={styles.browseImageIcon} source={require('./assets/nightlife-icon.jpg')} />
// //               <Text style={styles.categoriesText}>Nightlife</Text>
// //             </TouchableOpacity>

// //           </View>
// //           <View style={styles.columnViewStyle}>
// //             <TouchableOpacity>
// //               <Image style={styles.browseImageIcon} source={require('./assets/shopping-icon.png')} />
// //               <Text style={styles.categoriesText}>Shopping</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </View>

// //         <View style={styles.browseCategoryRowFlex}>
// //           <View style={styles.columnViewStyle}>
// //             <TouchableOpacity>
// //               <Image style={styles.browseImageIcon} source={require('./assets/culture-icon.png')} />
// //               <Text style={styles.categoriesText}>Culture</Text>
// //             </TouchableOpacity>
// //           </View>
// //           <View style={styles.columnViewStyle}>
// //             <TouchableOpacity>
// //               <Image style={styles.browseImageIcon} source={require('./assets/heart-icon-blue.png')} />
// //               <Text style={styles.categoriesText}>Popular</Text>
// //             </TouchableOpacity>

// //           </View>
// //         </View>

// //       </ScrollView>
// //       <Footer />
// //     </View>
// //   )
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center"
// //   },
// //   browseCategoryRowFlex:
// //   {
// //     flexDirection: "row",
// //     paddingHorizontal: 40,
// //     marginTop: 20,
// //     justifyContent: "center",
// //   },
// //   columnViewStyle: {
// //     width: "50%",
// //     //height: "120%",
// //     backgroundColor: "#FDFEFE",
// //     paddingVertical: 20,
// //     marginLeft: 10,
// //     textAlign: "center",
// //     flexDirection: "column",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     borderWidth: 1,
// //     borderColor: "#D3D3D3",
// //     borderRadius: 5,
// //   },
// //   browseImageIcon: {
// //     width: 80,
// //     height: 80,
// //   },
// //   categoriesText: {
// //     textAlign: "center",
// //     marginTop: 5,
// //     fontSize: 15
// //   }
// // });

// // export default App;

// //*********************************************Browse Restaurants*******************************//

// // import React from "react";
// // import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
// // import Footer from "./src/Footer";
// // import Header from "./src/Header";

// // const datas = [
// //   {
// //     id: 1,
// //     restaurantImageSource: require('./assets/pizza.jpg'),
// //     restaurantName: "Gramercy Tavern",
// //     gpsSource: require('./assets/location.jpg'),
// //     locationName: "42 E 20th St",
// //     heartIconSource: require('./assets/heart.jpeg'),
// //     likesText: "228",
// //     rightArrowSource: require('./assets/right-arrow.jpeg')
// //   },
// //   {
// //     id: 2,
// //     restaurantImageSource: require('./assets/burger.jpg'),
// //     restaurantName: "Blue Hill",
// //     gpsSource: require('./assets/location.jpg'),
// //     locationName: "75 Washington PI",
// //     heartIconSource: require('./assets/heart.jpeg'),
// //     likesText: "215",
// //     rightArrowSource: require('./assets/right-arrow.jpeg')
// //   },
// //   {
// //     id: 3,
// //     restaurantImageSource: require('./assets/pasta.png'),
// //     restaurantName: "Le Bernardin",
// //     gpsSource: require('./assets/location.jpg'),
// //     locationName: "155 W 51st St",
// //     heartIconSource: require('./assets/heart.jpeg'),
// //     likesText: "199",
// //     rightArrowSource: require('./assets/right-arrow.jpeg')
// //   },
// //   {
// //     id: 4,
// //     restaurantImageSource: require('./assets/french-fries.jpg'),
// //     restaurantName: "Jean-Georges",
// //     gpsSource: require('./assets/location.jpg'),
// //     locationName: "1 Central Park West",
// //     heartIconSource: require('./assets/heart.jpeg'),
// //     likesText: "183",
// //     rightArrowSource: require('./assets/right-arrow.jpeg')
// //   },
// //   {
// //     id: 5,
// //     restaurantImageSource: require('./assets/brownie.jpg'),
// //     restaurantName: "The Four Seasons",
// //     gpsSource: require('./assets/location.jpg'),
// //     locationName: "99 E 52md St",
// //     heartIconSource: require('./assets/heart.jpeg'),
// //     likesText: "178",
// //     rightArrowSource: require('./assets/right-arrow.jpeg')
// //   },
// //   {
// //     id: 6,
// //     restaurantImageSource: require('./assets/sandwich.jpeg'),
// //     restaurantName: "Ninja New York",
// //     gpsSource: require('./assets/location.jpg'),
// //     locationName: "25 Hudson St",
// //     heartIconSource: require('./assets/heart.jpeg'),
// //     likesText: "78",
// //     rightArrowSource: require('./assets/right-arrow.jpeg')
// //   },
// // ];

// // function createData(data) {
// //   return (
// //     <View>
// //       <View style={styles.restaurantRowStyle}>

// //         <View style={{ width: "20%" }}>
// //           <Image style={styles.restaurantImage} source={data.restaurantImageSource} />
// //         </View>

// //         <View style={{ width: "70%", marginTop: 5 }}>
// //           <Text style={styles.restaurantText}>{data.restaurantName}</Text>
// //           <View style={{ flexDirection: "column" }}>
// //             <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 5 }}>
// //               <Image style={styles.gpsIcon} source={data.gpsSource} />
// //               <Text style={styles.locationText}>{data.locationName}</Text>
// //               <Image style={styles.heartIcon} source={data.heartIconSource} ></Image>
// //               <Text style={styles.liketext}>{data.likesText}</Text>
// //             </View>
// //           </View>
// //         </View>

// //         <View style={{ width: "10%" }}>
// //           <Image style={styles.rightArrow} source={data.rightArrowSource}></Image>
// //         </View>

// //       </View>

// //       <View
// //         style={{
// //           borderBottomColor: '#A9A9A9',
// //           borderBottomWidth: 0.4,
// //           marginTop: 5
// //         }}
// //       />
// //     </View>
// //   )
// // }

// // const App = () => {
// //   return (

// //     <View style={styles.container}>
// //       <Header heading="Browse Restaurants"/>
// //       <ScrollView>
// //         {datas.map(createData)}
// //       </ScrollView>
// //       <Footer />
// //     </View>
// //   )
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1
// //   },
// //   restaurantRowStyle: {
// //     flex: 1,
// //     flexDirection: "row",
// //     padding: 20, height: "10%"
// //   },
// //   restaurantHeading: {
// //     flexDirection: "row"
// //   },
// //   restaurantImage: {
// //     height: "130%",
// //     width: "100%",
// //     borderRadius: 5
// //   },
// //   restaurantText: {
// //     marginLeft: 10,
// //     fontSize: 16
// //   },
// //   rightArrow: {
// //     height: 12,
// //     width: 12,
// //     marginTop: 20,
// //   },
// //   gpsIcon: {
// //     height: 20,
// //     width: 20,
// //   },
// //   locationText: {
// //     color: '#A9A9A9'
// //   },
// //   heartIcon: {
// //     height: 18,
// //     width: 18,
// //     marginLeft: 10
// //   },
// //   liketext: {
// //     color: '#A9A9A9'
// //   }
// // });

// // export default App;

