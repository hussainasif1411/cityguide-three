//Adding all required dependencies
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import Axios from 'axios';

//Browse Categories Page
const BrowseCategories = ({ navigation }) => {

  //Setting state
  const [allCategory, setAllCategory] = useState([]);

  //Getting data from API
  useEffect(() => {
    Axios.get('https://damp-sea-94376.herokuapp.com/api/getCategories')
      .then(function (response) {
        //alert(JSON.stringify(response.data.data));
        setAllCategory(response.data.data);
      })
      .catch(function (error) {
        alert(error.message);
      })
  }, []);

  return (
    <View style={styles.container}>
      <Header heading="Browse Categories"
      navigationProp={navigation}
      navigationRoute={'Login'} />
      <ScrollView>

        <View style={styles.browseCategoryRowFlex}>
          {allCategory.map((item,i) => {
            return (
              <View key={i}>

                <View style={styles.columnViewStyle}>
                  <TouchableOpacity onPress={() => navigation.navigate('BrowseRestaurant', {
                    categoryName: item.category
                  })}>
                    {item.category === "restaurants" &&
                      <Image style={styles.browseImageIcon} source={require('../assets/restaurant-icon.png')} />
                    }

                    {item.category === "hotels" &&
                      <Image style={styles.browseImageIcon} source={require('../assets/hotel-icon.jpg')} />
                    }

                    {item.category === "nightlife" &&
                      <Image style={styles.browseImageIcon} source={require('../assets/nightlife-icon.jpg')} />
                    }

                    {item.category === "shopping" &&
                      <Image style={styles.browseImageIcon} source={require('../assets/shopping-icon.png')} />
                    }

                    {item.category === "culture" &&
                      <Image style={styles.browseImageIcon} source={require('../assets/culture-icon.png')} />
                    }

                    {item.category === "popular" &&
                      <Image style={styles.browseImageIcon} source={require('../assets/heart-icon-blue.png')} />
                    }

                    <Text style={styles.categoriesText}>{item.category}</Text>
                  </TouchableOpacity>
                </View>

              </View>
            )
          }
          )}

        </View>

      </ScrollView>
      <Footer props={navigation} />
    </View>
  )
}

//Styling Browse Categories Page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  browseCategoryRowFlex:
  {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    //paddingHorizontal: 20,
    paddingVertical: 20,
    //marginTop: 20,
    justifyContent: "center",
    marginBottom: 40
  },
  columnViewStyle: {
    width: "90%",
    height: "30%",
    //height: "120%",
    backgroundColor: "#FDFEFE",
    paddingVertical: 10,
    paddingHorizontal: 30,
    //marginLeft: 10,
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 5,
    marginTop: 10,
    //marginBottom: 20
  },
  browseImageIcon: {
    width: 80,
    height: 80,
  },
  categoriesText: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 15,
    textTransform: "capitalize"
  }
});

export default BrowseCategories;



//27 July

// //Adding all required dependencies
// import React, { useState, useEffect } from "react";
// import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
// import Header from "./Header";
// import Footer from "./Footer";
// import Axios from 'axios';

// //Browse Categories Page
// const BrowseCategories = ({ navigation }) => {

//   //Setting state
//   const [allCategory, setAllCategory] = useState([]);

//   //Getting data from API
//   useEffect(() => {
//     Axios.get('https://damp-sea-94376.herokuapp.com/api/getCategories')
//       .then(function (response) {
//         //alert(JSON.stringify(response.data.data));
//         setAllCategory(response.data.data);
//       })
//       .catch(function (error) {
//         alert(error.message);
//       })
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Header heading="Browse Categories"
//       navigationProp={navigation}
//       navigationRoute={'Login'} />
//       <ScrollView>

//         <View style={styles.browseCategoryRowFlex}>
//           {allCategory.map((item,i) => {
//             return (
//               <View key={i}>

//                 <View style={styles.columnViewStyle}>
//                   <TouchableOpacity onPress={() => navigation.navigate('BrowseRestaurant', {
//                     categoryName: item.category
//                   })}>
//                     {item.category === "restaurants" &&
//                       <Image style={styles.browseImageIcon} source={require('../assets/restaurant-icon.png')} />
//                     }

//                     {item.category === "hotels" &&
//                       <Image style={styles.browseImageIcon} source={require('../assets/hotel-icon.jpg')} />
//                     }

//                     {item.category === "nightlife" &&
//                       <Image style={styles.browseImageIcon} source={require('../assets/nightlife-icon.jpg')} />
//                     }

//                     {item.category === "shopping" &&
//                       <Image style={styles.browseImageIcon} source={require('../assets/shopping-icon.png')} />
//                     }

//                     {item.category === "culture" &&
//                       <Image style={styles.browseImageIcon} source={require('../assets/culture-icon.png')} />
//                     }

//                     {item.category === "popular" &&
//                       <Image style={styles.browseImageIcon} source={require('../assets/heart-icon-blue.png')} />
//                     }

//                     <Text style={styles.categoriesText}>{item.category}</Text>
//                   </TouchableOpacity>
//                 </View>

//               </View>
//             )
//           }
//           )}

//         </View>

//       </ScrollView>
//       <Footer props={navigation} />
//     </View>
//   )
// }

// //Styling Browse Categories Page
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   browseCategoryRowFlex:
//   {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     alignItems: "flex-start",
//     //paddingHorizontal: 20,
//     paddingVertical: 20,
//     //marginTop: 20,
//     justifyContent: "center",
//     marginBottom: 40
//   },
//   columnViewStyle: {
//     width: "90%",
//     height: "30%",
//     //height: "120%",
//     backgroundColor: "#FDFEFE",
//     paddingVertical: 10,
//     paddingHorizontal: 30,
//     //marginLeft: 10,
//     textAlign: "center",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#D3D3D3",
//     borderRadius: 5,
//     marginTop: 10,
//     //marginBottom: 20
//   },
//   browseImageIcon: {
//     width: 80,
//     height: 80,
//   },
//   categoriesText: {
//     textAlign: "center",
//     marginTop: 5,
//     fontSize: 15,
//     textTransform: "capitalize"
//   }
// });

// export default BrowseCategories;








// import React from "react";
// import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
// import Header from "./Header";
// import Footer from "./Footer";

// const getDataUsingSimpleGetCall = () => {
//   axios
//     .get('https://damp-sea-94376.herokuapp.com/api/getCategories')
//     .then(function (response) {
//       alert(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//       alert(error.message);
//     })
// };


// //Browse Categories Page
// const BrowseCategories = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <Header heading="Browse Categories" />
//       <ScrollView>
//         <View style={styles.browseCategoryRowFlex}>
//           <View style={styles.columnViewStyle}>
//             <TouchableOpacity onPress={() => navigation.navigate('BrowseRestaurant') }>
//               <Image style={styles.browseImageIcon} source={require('../assets/restaurant-icon.png')} />
//               <Text style={styles.categoriesText}>Restaurants</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.columnViewStyle}>
//             <TouchableOpacity>
//               <Image style={styles.browseImageIcon} source={require('../assets/hotel-icon.jpg')} />
//               <Text style={styles.categoriesText}>Hotels</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.browseCategoryRowFlex}>
//           <View style={styles.columnViewStyle}>
//             <TouchableOpacity>
//               <Image style={styles.browseImageIcon} source={require('../assets/nightlife-icon.jpg')} />
//               <Text style={styles.categoriesText}>Nightlife</Text>
//             </TouchableOpacity>

//           </View>
//           <View style={styles.columnViewStyle}>
//             <TouchableOpacity>
//               <Image style={styles.browseImageIcon} source={require('../assets/shopping-icon.png')} />
//               <Text style={styles.categoriesText}>Shopping</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.browseCategoryRowFlex}>
//           <View style={styles.columnViewStyle}>
//             <TouchableOpacity>
//               <Image style={styles.browseImageIcon} source={require('../assets/culture-icon.png')} />
//               <Text style={styles.categoriesText}>Culture</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.columnViewStyle}>
//             <TouchableOpacity>
//               <Image style={styles.browseImageIcon} source={require('../assets/heart-icon-blue.png')} />
//               <Text style={styles.categoriesText}>Popular</Text>
//             </TouchableOpacity>
//           </View>

//         </View>

//       </ScrollView>
//       <Footer props={navigation}/>
//     </View>
//   )
// }

// //Styling Browse Categories Page
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   browseCategoryRowFlex:
//   {
//     flexDirection: "row",
//     paddingHorizontal: 40,
//     marginTop: 20,
//     justifyContent: "center",
//   },
//   columnViewStyle: {
//     width: "50%",
//     //height: "120%",
//     backgroundColor: "#FDFEFE",
//     paddingVertical: 20,
//     marginLeft: 10,
//     textAlign: "center",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#D3D3D3",
//     borderRadius: 5,
//   },
//   browseImageIcon: {
//     width: 80,
//     height: 80,
//   },
//   categoriesText: {
//     textAlign: "center",
//     marginTop: 5,
//     fontSize: 15
//   }
// });

// export default BrowseCategories;