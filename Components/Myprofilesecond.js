






// import React, { useState } from "react";
// import { View, Text, Button, StyleSheet, Image } from "react-native";
// import { MaterialIcons } from '@expo/vector-icons'; 
// import * as ImagePicker from 'expo-image-picker';
// import { useNavigation } from '@react-navigation/native';

// export default function Myprofilesecond(){

//     const navigation = useNavigation();

//     const [image, setImage] = useState(null);

//     const pickImage = async () => {
//         let result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.All,
//             allowsEditing: true,
//             aspect: [4, 3],
//             quality: 1,
//         });

//         console.log(result);

//         if (!result.cancelled) {
//             setImage(result.assets[0].uri);
//         }
//     };

//     const cancelImage = () => {
//         setImage(null);
//     };

//     const handleShowQRCode = () => {
//         // navigation.navigate('Myqrcode');

//     };

//     const handleEditProfile = () => {
//         navigation.navigate('Profile');
//     };

//     return(
//         <View>
//             <View>
//                 <View style={styles.imageContainer}>
//                     {image ? (
//                         <>
//                             <Image source={{ uri: image }} style={styles.image} />
//                             <Button title="Cancel" onPress={cancelImage} />
//                         </>
//                     ) : (
//                         <View style={styles.emptyImage}>
//                             <MaterialIcons name="photo-camera" size={50} color="#aaa" onPress={pickImage} />
//                         </View>
//                     )}
//                     <View style={styles.sectionFill}>
//                         <Text style={styles.sectionLabel}>Fill the below details to generate the QR Code*</Text>
//                     </View>
//                 </View>
//             </View>
//             <View style={styles.buttonContainer}>
//                 <Button title="Show QR Code" onPress={handleShowQRCode} />
//             </View>
//             <View style={styles.buttonContainer}>
//                 <Button title="Edit Profile" onPress={handleEditProfile} />
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     imageContainer: {
//         alignItems: 'center',
//         marginVertical: 20,
//     },
//     image: {
//         width: 200,
//         height: 200,
//         borderRadius: 100,
//     },
//     emptyImage: {
//         width: 200,
//         height: 200,
//         borderRadius: 100,
//         backgroundColor: '#ccc',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     sectionFill: {
//         marginTop: 20,
//     },
//     sectionLabel: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
//     buttonContainer: {
//         marginHorizontal: 20,
//         marginTop: 20,
//     },
// });




// import React, { useState } from "react";
// import { View, Text, Button, StyleSheet, Image } from "react-native";
// import { MaterialIcons } from '@expo/vector-icons'; 
// import * as ImagePicker from 'expo-image-picker';
// import { useNavigation } from '@react-navigation/native';

// export default function Myprofilesecond(){

//     const navigation = useNavigation();

//     const [image, setImage] = useState(null);

//     const pickImage = async () => {
//         let result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.All,
//             allowsEditing: true,
//             aspect: [4, 3],
//             quality: 1,
//         });

//         console.log(result);

//         if (!result.cancelled) {
//             setImage(result.assets[0].uri);
//         }
//     };

//     const cancelImage = () => {
//         setImage(null);
//     };

//     const handleShowQRCode = () => {
//         navigation.navigate('Myqrcode'); // Navigate to Myqrcode screen
//     };

//     const handleEditProfile = () => {
//         navigation.navigate('Profile');
//     };

//     return(
//         <View>
//             <View>
//                 <View style={styles.imageContainer}>
//                     {image ? (
//                         <>
//                             <Image source={{ uri: image }} style={styles.image} />
//                             <Button title="Cancel" onPress={cancelImage} />
//                         </>
//                     ) : (
//                         <View style={styles.emptyImage}>
//                             <MaterialIcons name="photo-camera" size={50} color="#aaa" onPress={pickImage} />
//                         </View>
//                     )}
//                     <View style={styles.sectionFill}>
//                         <Text style={styles.sectionLabel}>Fill the below details to generate the QR Code*</Text>
//                     </View>
//                 </View>
//             </View>
//             <View style={styles.buttonContainer}>
//                 <Button title="Show QR Code" onPress={handleShowQRCode} />
//             </View>
//             <View style={styles.buttonContainer}>
//                 <Button title="Edit Profile" onPress={handleEditProfile} />
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     imageContainer: {
//         alignItems: 'center',
//         marginVertical: 20,
//     },
//     image: {
//         width: 200,
//         height: 200,
//         borderRadius: 100,
//     },
//     emptyImage: {
//         width: 200,
//         height: 200,
//         borderRadius: 100,
//         backgroundColor: '#ccc',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     sectionFill: {
//         marginTop: 20,
//     },
//     sectionLabel: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
//     buttonContainer: {
//         marginHorizontal: 20,
//         marginTop: 20,
//     },
// });






import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

export default function Myprofilesecond(){

    const navigation = useNavigation();

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

    const handleShowQRCode = () => {
         navigation.navigate('Myqrcode');
        
    };

    const handleEditProfile = () => {
        navigation.navigate('Profile');
    };

    return(
        <View>
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
            <View style={styles.buttonContainer}>
                <Button title="Show QR Code" onPress={handleShowQRCode} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Edit Profile" onPress={handleEditProfile} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    emptyImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionFill: {
        marginTop: 20,
    },
    sectionLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
});