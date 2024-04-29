// import React, { useState, useLayoutEffect,useEffect } from 'react';
// import { View, StyleSheet, Text, Platform, Image, Button } from 'react-native';
// import QRCode from 'react-native-qrcode-svg';
// import { MaterialIcons } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';

// const Myqrcode = ({ navigation }) => {
//   const data = "https://www.npmjs.com/package/react-native-heroicons";
//   const [image, setImage] = useState(null);

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
//   useEffect(() => {
//     const unsubscribe = navigation.addListener('beforeRemove', (e) => {
     
//       e.preventDefault();

   
//       navigation.navigate('Myprofilesecond');
//     });

//     return unsubscribe;
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
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
//         <View style={styles.sectionFill}>
//           <Text style={styles.sectionLabel}>Srinivas Nallamari</Text>
//         </View>
//         <View style={styles.sectionqrcode}>
//           <Text style={styles.sectionqrcode}>Share your distinctive QR Code to the doctor to have the prescription added</Text>
//         </View>
//       </View>
//       <QRCode
//         value={data}
//         size={200}
//         backgroundColor="white"
//         color="black"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "flex-start",
//     alignItems: 'center',
//     paddingTop: Platform.OS === 'android' ? 20 : 0,
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
//   sectionqrcode: {
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//     paddingHorizontal: 19,
//     marginTop: 10,
//   },
// });

// export default Myqrcode;


// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, Text, Platform, Image, Button } from 'react-native';
// import QRCode from 'react-native-qrcode-svg';
// import { MaterialIcons } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';
// import { useNavigation } from '@react-navigation/native';

// const Myqrcode = () => {
//   const navigation = useNavigation();
//   const data = "https://www.npmjs.com/package/react-native-heroicons";
//   const [image, setImage] = useState(null);

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

//   useEffect(() => {
//     const unsubscribe = navigation.addListener('beforeRemove', (e) => {
     
//       e.preventDefault();

   
//       navigation.navigate('Myprofilesecond');
//     });

//     return unsubscribe;
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
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
//         <View style={styles.sectionFill}>
//           <Text style={styles.sectionLabel}>Srinivas Nallamari</Text>
//         </View>
//         <View style={styles.sectionqrcode}>
//           <Text style={styles.sectionqrcode}>Share your distinctive QR Code to the doctor to have the prescription added</Text>
//         </View>
//       </View>
//       <QRCode
//         value={data}
//         size={200}
//         backgroundColor="white"
//         color="black"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "flex-start",
//     alignItems: 'center',
//     paddingTop: Platform.OS === 'android' ? 20 : 0,
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
//   sectionqrcode: {
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//     paddingHorizontal: 19,
//     marginTop: 10,
//   },
// });

// export default Myqrcode;



import React, { useState, useLayoutEffect,useEffect } from 'react';
import { View, StyleSheet, Text, Platform, Image, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Tabbar from './Tabnavigation';

const Myqrcode = ({ navigation }) => {
  const data = "https://www.npmjs.com/package/react-native-heroicons";
  const [image, setImage] = useState(null);

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

  // Use useLayoutEffect to set navigation options
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      // Prevent default behavior of leaving the screen
      e.preventDefault();

      // Navigate to Myprofilesecond
      navigation.navigate("Myprofilesecond");
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
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
          <Text style={styles.sectionLabel}>Srinivas Nallamari</Text>
        </View>
        <View style={styles.sectionqrcode}>
          <Text style={styles.sectionqrcode}>Share your distinctive QR Code to the doctor to have the prescription added</Text>
        </View>
      </View>
      <QRCode
        value={data}
        size={200}
        backgroundColor="white"
        color="black"
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
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
  sectionqrcode: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 19,
    marginTop: 10,
  },
});

export default Myqrcode;