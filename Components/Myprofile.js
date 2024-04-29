


// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet, Image, Platform, ScrollView } from "react-native";
// import { MaterialIcons } from '@expo/vector-icons'; 
// import * as ImagePicker from 'expo-image-picker';

// export default function MyProfile() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [dob, setDob] = useState("");
//   const [bloodGroup, setBloodGroup] = useState("");
//   const [height, setHeight] = useState("");
//   const [weight, setWeight] = useState("");
//   const [errors, setErrors] = useState({});
//   const [image, setImage] = useState(null);

//   const handleSubmit = () => {
//     // Validation
//     const errors = {};
//     if (!firstName.trim()) {
//       errors.firstName = "First name is required";
//     }
//     if (!lastName.trim()) {
//       errors.lastName = "Last name is required";
//     }
//     if (!dob.trim()) {
//       errors.dob = "Date of birth is required";
//     }
//     if (!bloodGroup.trim()) {
//       errors.bloodGroup = "Blood group is required";
//     }
//     if (!height.trim()) {
//       errors.height = "Height is required";
//     }
//     if (!weight.trim()) {
//       errors.weight = "Weight is required";
//     }

//     if (Object.keys(errors).length > 0) {
//       setErrors(errors);
//       return;
//     }

//     console.log("Form submitted:", { firstName, lastName, dob, bloodGroup, height, weight });

//     // Reset form fields and errors after submission
//     setFirstName("");
//     setLastName("");
//     setDob("");
//     setBloodGroup("");
//     setHeight("");
//     setWeight("");
//     setErrors({});
//   };

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   const cancelImage = () => {
//     setImage(null);
//   };

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <View>
//           <View style={styles.imageContainer}>
//             {image ? (
//               <>
//                 <Image source={{ uri: image }} style={styles.image} />
//                 <Button title="Cancel" onPress={cancelImage} />
//               </>
//             ) : (
//               <View style={styles.emptyImage}>
//                 <MaterialIcons name="photo-camera" size={50} color="#aaa" onPress={pickImage} />
//               </View>
//             )}
//             <View style={styles.sectionFill}>
//               <Text style={styles.sectionLabel}>Fill the below details to generate the QR Code*</Text>
//             </View>
//           </View>
//         </View>

//         <Text style={styles.label}>First Name*</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="First Name"
//           value={firstName}
//           onChangeText={(text) => setFirstName(text)}
//         />
//         <Text style={styles.errorText}>{errors.firstName}</Text>

//         <Text style={styles.label}>Last Name*</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Last Name"
//           value={lastName}
//           onChangeText={(text) => setLastName(text)}
//         />
//         <Text style={styles.errorText}>{errors.lastName}</Text>

//         <Text style={styles.label}>Date of Birth*</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Date of Birth"
//           value={dob}
//           onChangeText={(text) => setDob(text)}
//         />
//         <Text style={styles.errorText}>{errors.dob}</Text>

//         <Text style={styles.label}>Blood Group*</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Blood Group"
//           value={bloodGroup}
//           onChangeText={(text) => setBloodGroup(text)}
//         />
//         <Text style={styles.errorText}>{errors.bloodGroup}</Text>

//         <Text style={styles.label}>Height*</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Height"
//           value={height}
//           onChangeText={(text) => setHeight(text)}
//         />
//         <Text style={styles.errorText}>{errors.height}</Text>

//         <Text style={styles.label}>Weight*</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Weight"
//           value={weight}
//           onChangeText={(text) => setWeight(text)}
//         />
//         <Text style={styles.errorText}>{errors.weight}</Text>

//         <View style={styles.buttonContainer}>
//           <Button title="Submit" onPress={handleSubmit} />
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: Platform.OS === 'android' ? 5 : 0, 
//     paddingBottom: Platform.OS === 'android' ? 45 : 0,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 20,
//   },
//   label: {
//     alignSelf: "flex-start",
//   },
//   input: {
//     height: 40,
//     width: "100%",
//     paddingHorizontal: 10,
//     borderColor: "#333", 
//     borderWidth: 1,
//     borderRadius:3,
//   },
//   errorText: {
//     color: "red",
//     marginBottom: 5,
//     alignSelf: "flex-start",
//   },
//   buttonContainer: {
//     width: "100%",
//     height: 40,
//     marginTop: 10,
//   },
//   imageContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 75,
//   },
//   emptyImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 75,
//     backgroundColor: '#eee',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   sectionLabel: {
//     fontSize: 15,
//     fontWeight: "bold",
//   },
// });




// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet, Image,Platform } from "react-native";
// import { MaterialIcons } from '@expo/vector-icons'; 
// import * as ImagePicker from 'expo-image-picker';
// export default function MyProfile() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [dob, setDob] = useState("");
//   const [bloodGroup, setBloodGroup] = useState("");
//   const [height, setHeight] = useState("");
//   const [weight, setWeight] = useState("");
//   const [errors, setErrors] = useState({});
//   const [image, setImage] = useState(null);
//   const handleSubmit = () => {
//     // Validation
//     const errors = {};
//     if (!firstName.trim()) {
//       errors.firstName = "First name is required";
//     }
//     if (!lastName.trim()) {
//       errors.lastName = "Last name is required";
//     }
//     if (!dob.trim()) {
//       errors.dob = "Date of birth is required";
//     }
//     if (!bloodGroup.trim()) {
//       errors.bloodGroup = "Blood group is required";
//     }
//     if (!height.trim()) {
//       errors.height = "Height is required";
//     }
//     if (!weight.trim()) {
//       errors.weight = "Weight is required";
//     }

//     if (Object.keys(errors).length > 0) {
//       setErrors(errors);
//       return;
//     }

//        console.log("Form submitted:", { firstName, lastName, dob, bloodGroup, height, weight });

//     setFirstName("");
//     setLastName("");
//     setDob("");
//     setBloodGroup("");
//     setHeight("");
//     setWeight("");
//     setErrors({});
//   };
//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       setImage(result.assets[0].uri);
//     }
//   };

//   const cancelImage = () => {
//     setImage(null);
//   };
//   return (
//     <View style={styles.container}>
//         <View>
//       <View style={styles.imageContainer}>
//         {image ? (
//           <>
//             <Image source={{ uri: image }} style={styles.image} />
//             <Button title="Cancel" onPress={cancelImage} />
//           </>
//         ) : (
//           <View style={styles.emptyImage}>
//             <MaterialIcons name="photo-camera" size={50} color="#aaa" onPress={pickImage} />
//           </View>
//         )}
//         <View  style={styles.sectionFill}>
//         <Text style={styles.sectionLabel}>Fill the below details to generate the QR Code*</Text>

//         </View>
//       </View>
 
//     </View>
//       <Text style={styles.label}>First Name</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="First Name"
//         value={firstName}
//         onChangeText={(text) => setFirstName(text)}
//       />
//       <Text style={styles.errorText}>{errors.firstName}</Text>

//       <Text style={styles.label}>Last Name</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Last Name"
//         value={lastName}
//         onChangeText={(text) => setLastName(text)}
//       />
//       <Text style={styles.errorText}>{errors.lastName}</Text>

//       <Text style={styles.label}>Date of Birth</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Date of Birth"
//         value={dob}
//         onChangeText={(text) => setDob(text)}
//       />
//       <Text style={styles.errorText}>{errors.dob}</Text>

//       <Text style={styles.label}>Blood Group</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Blood Group"
//         value={bloodGroup}
//         onChangeText={(text) => setBloodGroup(text)}
//       />
//       <Text style={styles.errorText}>{errors.bloodGroup}</Text>

//       <Text style={styles.label}>Height</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Height"
//         value={height}
//         onChangeText={(text) => setHeight(text)}
//       />
//       <Text style={styles.errorText}>{errors.height}</Text>

//       <Text style={styles.label}>Weight</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Weight"
//         value={weight}
//         onChangeText={(text) => setWeight(text)}
//       />
//       <Text style={styles.errorText}>{errors.weight}</Text>

//       <View style={styles.buttonContainer}>
//         <Button title="Submit" onPress={handleSubmit} />
//       </View>
  
//           </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   paddingTop: Platform.OS === 'android' ? 5 : 0, 
//   paddingBottom: Platform.OS === 'android' ? 45 : 0,
//   justifyContent: "center",
//   alignItems: "center",
//   paddingHorizontal: 20,
//   },

//   label: {
//     alignSelf: "flex-start",
//     //marginBottom:0,
//   },
//   input: {
//     height: 40,
//     width: "100%",
//     paddingHorizontal: 10,
//   //  marginBottom: 0,
//     borderColor: "gray",
//     borderWidth: 1,
//   },
//   errorText: {
//     color: "red",
//     marginBottom: 5,
//     alignSelf: "flex-start",
//   },
//   buttonContainer: {
//     width: "100%",
//     height:40,
//     marginTop: 10,
//   },
//   imageContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 75,
//   },
//   emptyImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 75,
//     backgroundColor: '#eee',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   sectionLabel:{
//     fontSize:15,
//     fontWeight:"bold",

//   }
// });