
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image, Platform, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();
   const route = useRoute();

  const { firstName: initialFirstName = "", lastName: initialLastName = "", dob: initialDob = "", bloodGroup: initialBloodGroup = "", height: initialHeight = "", weight: initialWeight = "", image: initialImage = null } = route.params || {};

  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [dob, setDob] = useState(initialDob);
  const [bloodGroup, setBloodGroup] = useState(initialBloodGroup);
  const [height, setHeight] = useState(initialHeight);
  const [weight, setWeight] = useState(initialWeight);
  const [image, setImage] = useState(initialImage);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFirstName(initialFirstName);
    setLastName(initialLastName);
    setDob(initialDob);
    setBloodGroup(initialBloodGroup);
    setHeight(initialHeight);
    setWeight(initialWeight);
    setImage(initialImage);
  }, [initialFirstName, initialLastName, initialDob, initialBloodGroup, initialHeight, initialWeight, initialImage]);

  const handleSubmit = () => {
    const errors = {};
    if (!firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!dob.trim()) {
      errors.dob = "Date of birth is required";
    }
    if (!bloodGroup.trim()) {
      errors.bloodGroup = "Blood group is required";
    }
    if (!height.trim()) {
      errors.height = "Height is required";
    }
    if (!weight.trim()) {
      errors.weight = "Weight is required";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    console.log("Form submitted:", { firstName, lastName, dob, bloodGroup, height, weight });
    setFirstName("");
    setLastName("");
    setDob("");
    setBloodGroup("");
    setHeight("");
    setWeight("");
    setErrors({});

    navigation.navigate("Myqrcode")
   
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  const cancelImage = () => {
    setImage(null);
  };

  const handleEditProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View style={styles.imageContainer}>
            {image ? (
              <>
                <Image source={{ uri: image }} style={styles.image} />
                <Button title="Cancel" onPress={cancelImage} />
              </>
            ) : (
              <View style={styles.emptyImage}>
                <MaterialIcons name="photo-camera" size={50} color="#aaa" onPress={pickImage} />
              </View>
            )}
            <View style={styles.sectionFill}>
              <Text style={styles.sectionLabel}>Fill the below details to generate the QR Code*</Text>
            </View>
          </View>
        </View>

        <Text style={styles.label}>First Name*</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <Text style={styles.errorText}>{errors.firstName}</Text>

        <Text style={styles.label}>Last Name*</Text>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <Text style={styles.errorText}>{errors.lastName}</Text>

        <Text style={styles.label}>Date of Birth*</Text>
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          value={dob}
          onChangeText={(text) => setDob(text)}
        />
        <Text style={styles.errorText}>{errors.dob}</Text>

        <Text style={styles.label}>Blood Group*</Text>
        <TextInput
          style={styles.input}
          placeholder="Blood Group"
          value={bloodGroup}
          onChangeText={(text) => setBloodGroup(text)}
        />
        <Text style={styles.errorText}>{errors.bloodGroup}</Text>

        <Text style={styles.label}>Height*</Text>
        <TextInput
          style={styles.input}
          placeholder="Height"
          value={height}
          onChangeText={(text) => setHeight(text)}
        />
        <Text style={styles.errorText}>{errors.height}</Text>

        <Text style={styles.label}>Weight*</Text>
        <TextInput
          style={styles.input}
          placeholder="Weight"
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
        <Text style={styles.errorText}>{errors.weight}</Text>

        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={handleSubmit} />
        </View>
        
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 5 : 0, 
    paddingBottom: Platform.OS === 'android' ? 45 : 0,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  label: {
    alignSelf: "flex-start",
  },
  input: {
    height: 40,
    width: "100%",
    paddingHorizontal: 10,
    borderColor: "#333", 
    borderWidth: 1,
    borderRadius:3,
  },
  errorText: {
    color: "red",
    marginBottom: 5,
    alignSelf: "flex-start",
  },
  buttonContainer: {
    width: "100%",
    height: 40,
    marginTop: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 75,
  },
  emptyImage: {
    width: 100,
    height: 100,
    borderRadius: 75,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLabel: {
    fontSize: 15,
    fontWeight: "bold",
  },
});













// import React, { useState, useEffect } from "react";
// import { View, Text, TextInput, Button, StyleSheet, Image, Platform, ScrollView } from "react-native";
// import { MaterialIcons } from '@expo/vector-icons'; 
// import * as ImagePicker from 'expo-image-picker';
// import { useNavigation, useRoute } from '@react-navigation/native';

// export default function Profile() {
//   const navigation = useNavigation();
//   const route = useRoute();

//   const { firstName: initialFirstName = "", lastName: initialLastName = "", dob: initialDob = "", bloodGroup: initialBloodGroup = "", height: initialHeight = "", weight: initialWeight = "", image: initialImage = null } = route.params || {};

//   const [firstName, setFirstName] = useState(initialFirstName);
//   const [lastName, setLastName] = useState(initialLastName);
//   const [dob, setDob] = useState(initialDob);
//   const [bloodGroup, setBloodGroup] = useState(initialBloodGroup);
//   const [height, setHeight] = useState(initialHeight);
//   const [weight, setWeight] = useState(initialWeight);
//   const [image, setImage] = useState(initialImage);
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     setFirstName(initialFirstName);
//     setLastName(initialLastName);
//     setDob(initialDob);
//     setBloodGroup(initialBloodGroup);
//     setHeight(initialHeight);
//     setWeight(initialWeight);
//     setImage(initialImage);
//   }, [initialFirstName, initialLastName, initialDob, initialBloodGroup, initialHeight, initialWeight, initialImage]);

//   const handleSubmit = () => {
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
//     setFirstName("");
//     setLastName("");
//     setDob("");
//     setBloodGroup("");
//     setHeight("");
//     setWeight("");
//     setErrors({});
//     navigation.navigate('Myqrcode');
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

//   const handleEditProfile = () => {
//     navigation.navigate('Profile');
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

// import React, { useState, useEffect } from "react";
// import { View, Text, TextInput, Button, StyleSheet, Image, Platform, ScrollView } from "react-native";
// import { MaterialIcons } from '@expo/vector-icons'; 
// import * as ImagePicker from 'expo-image-picker';
// import { useNavigation, useRoute } from '@react-navigation/native';

// export default function Profile() {
//   const navigation = useNavigation();
//   const route = useRoute();

//   const { firstName: initialFirstName = "", lastName: initialLastName = "", dob: initialDob = "", bloodGroup: initialBloodGroup = "", height: initialHeight = "", weight: initialWeight = "", image: initialImage = null } = route.params || {};

//   const [firstName, setFirstName] = useState(initialFirstName);
//   const [lastName, setLastName] = useState(initialLastName);
//   const [dob, setDob] = useState(initialDob);
//   const [bloodGroup, setBloodGroup] = useState(initialBloodGroup);
//   const [height, setHeight] = useState(initialHeight);
//   const [weight, setWeight] = useState(initialWeight);
//   const [image, setImage] = useState(initialImage);
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     setFirstName(initialFirstName);
//     setLastName(initialLastName);
//     setDob(initialDob);
//     setBloodGroup(initialBloodGroup);
//     setHeight(initialHeight);
//     setWeight(initialWeight);
//     setImage(initialImage);
//   }, [initialFirstName, initialLastName, initialDob, initialBloodGroup, initialHeight, initialWeight, initialImage]);

//   const handleSubmit = () => {
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

//     // Navigate to Myqrcode within the same tab stack
//     navigation.navigate('Myqrcode');
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


// import React, { useState, useEffect } from "react";
// import { View, Text, TextInput, Button, StyleSheet, Image, Platform, ScrollView } from "react-native";
// import { MaterialIcons } from '@expo/vector-icons'; 
// import * as ImagePicker from 'expo-image-picker';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import Myqrcode from './Myqrcode'; // Import the Myqrcode component

// export default function Profile() {
//   const navigation = useNavigation();
//   const route = useRoute();

//   const { firstName: initialFirstName = "", lastName: initialLastName = "", dob: initialDob = "", bloodGroup: initialBloodGroup = "", height: initialHeight = "", weight: initialWeight = "", image: initialImage = null } = route.params || {};

//   const [firstName, setFirstName] = useState(initialFirstName);
//   const [lastName, setLastName] = useState(initialLastName);
//   const [dob, setDob] = useState(initialDob);
//   const [bloodGroup, setBloodGroup] = useState(initialBloodGroup);
//   const [height, setHeight] = useState(initialHeight);
//   const [weight, setWeight] = useState(initialWeight);
//   const [image, setImage] = useState(initialImage);
//   const [errors, setErrors] = useState({});
//   const [showMyqrcode, setShowMyqrcode] = useState(false); // State to control Myqrcode visibility

//   useEffect(() => {
//     setFirstName(initialFirstName);
//     setLastName(initialLastName);
//     setDob(initialDob);
//     setBloodGroup(initialBloodGroup);
//     setHeight(initialHeight);
//     setWeight(initialWeight);
//     setImage(initialImage);
//   }, [initialFirstName, initialLastName, initialDob, initialBloodGroup, initialHeight, initialWeight, initialImage]);

//   const handleSubmit = () => {
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

//     // Show Myqrcode component
//     setShowMyqrcode(true);
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
  
//   //navigation.navigate('Myqrcode');
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         {!showMyqrcode ? ( // Render form if Myqrcode is not shown
//           <>
//             <View style={styles.imageContainer}>
//               {image ? (
//                 <>
//                   <Image source={{ uri: image }} style={styles.image} />
//                   <Button title="Cancel" onPress={cancelImage} />
//                 </>
//               ) : (
//                 <View style={styles.emptyImage}>
//                   <MaterialIcons name="photo-camera" size={50} color="#aaa" onPress={pickImage} />
//                 </View>
//               )}
//               <View style={styles.sectionFill}>
//                 <Text style={styles.sectionLabel}>Fill the below details to generate the QR Code*</Text>
//               </View>
//             </View>

//             <Text style={styles.label}>First Name*</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="First Name"
//               value={firstName}
//               onChangeText={(text) => setFirstName(text)}
//             />
//             <Text style={styles.errorText}>{errors.firstName}</Text>

//             <Text style={styles.label}>Last Name*</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Last Name"
//               value={lastName}
//               onChangeText={(text) => setLastName(text)}
//             />
//             <Text style={styles.errorText}>{errors.lastName}</Text>

//             <Text style={styles.label}>Date of Birth*</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Date of Birth"
//               value={dob}
//               onChangeText={(text) => setDob(text)}
//             />
//             <Text style={styles.errorText}>{errors.dob}</Text>

//             <Text style={styles.label}>Blood Group*</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Blood Group"
//               value={bloodGroup}
//               onChangeText={(text) => setBloodGroup(text)}
//             />
//             <Text style={styles.errorText}>{errors.bloodGroup}</Text>

//             <Text style={styles.label}>Height*</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Height"
//               value={height}
//               onChangeText={(text) => setHeight(text)}
//             />
//             <Text style={styles.errorText}>{errors.height}</Text>

//             <Text style={styles.label}>Weight*</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Weight"
//               value={weight}
//               onChangeText={(text) => setWeight(text)}
//             />
//             <Text style={styles.errorText}>{errors.weight}</Text>

//             <View style={styles.buttonContainer}>
//               <Button title="Submit" onPress={handleSubmit} />
//             </View>
//           </>
//         ) : (
//           // Render Myqrcode component
//           <Myqrcode
//             firstName={firstName}
//             lastName={lastName}
//             dob={dob}
//             bloodGroup={bloodGroup}
//             height={height}
//             weight={weight}
//             image={image}
//             navigation={navigation}
//           />
//         )}
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
