import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function Prescriptions({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>Sort</Text>
          <Ionicons name="swap-vertical-outline" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>Filter</Text>
          <Ionicons name="funnel-outline" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.dateContainer}>
        <Text>10:00, 18-04-2024</Text>
      </View>
   <View style={styles.boxContainertop}>
   <View style={styles.boxContainer}>
        <View style={styles.row}>
          <Text style={[styles.column,styles.text]}>Doctor Name</Text>
          <Text style={[styles.column,styles.text]}>Medical Condition</Text>
          <Text style={[styles.column,styles.text]}>Medicine</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.column,styles.textbharath]}>Bharath</Text>
          <Text style={[styles.column,styles.textbharath]}>Fever</Text>
          <Text style={[styles.column,styles.textbharath]}>PARACIP-5...</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.column,styles.text]}>Medicine...</Text>
          <Text style={[styles.column,styles.text]}>Time & Quant...</Text>
          <Text style={[styles.column,styles.text]}>Frequency</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.column,styles.textbharath]}>After Food</Text>
          <Text style={[styles.column,styles.textbharath]}>09:00 , 1 pcs</Text>
          <Text style={[styles.column,styles.textbharath]}>Daily</Text>
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.viewContainerText}>View More</Text>
        </View>
      </View>
      {/* Second Box Container */}
      <View style={styles.dateContainertwo}>
        <Text>10:00, 18-04-2024</Text>
      </View>
      <View style={styles.boxContainer}>
      <View style={styles.row}>
          <Text style={[styles.column,styles.text]}>Doctor Name</Text>
          <Text style={[styles.column,styles.text]}>Medical Condition</Text>
          <Text style={[styles.column,styles.text]}>Medicine</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.column,styles.textbharath]}>Bharath</Text>
          <Text style={[styles.column,styles.textbharath]}>Fever</Text>
          <Text style={[styles.column,styles.textbharath]}>PARACIP-5...</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.column,styles.text]}>Medicine...</Text>
          <Text style={[styles.column,styles.text]}>Time & Quant...</Text>
          <Text style={[styles.column,styles.text]}>Frequency</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.column,styles.textbharath]}>After Food</Text>
          <Text style={[styles.column,styles.textbharath]}>09:00 , 1 pcs</Text>
          <Text style={[styles.column,styles.textbharath]}>Daily</Text>
        </View>
        <View style={styles.viewContainer}>
          <Text style={styles.viewContainerText}>View More</Text>
        </View>
      </View>
   </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  iconsContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    flexDirection: 'row',
    columnGap: 3,
    paddingHorizontal: 20,
    paddingTop: 20,
    
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#47A0E9",
    padding: 6,
    borderRadius: 5,
   
  },
  iconText: {
    marginLeft: 5,
    color:"#47A0E9",
  },
  icon: {
    marginLeft: 5,
    color:"#47A0E9",
  },
  dateContainer: {
    position: 'absolute',
    top: 90,
    right: 21,
  },
  dateContainertwo:{
    left:221,
    marginBottom:5,
  },
  boxContainertop:{
  marginBottom:50,
  },
  boxContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 3,
    padding: 15,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20, 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  text:{
     fontSize:11,
  },
  textbharath:{
   fontSize:14,
   fontWeight:500,
  },
  column: {
    flex: 1,
    textAlign: 'left',
    fontSize:9,
  },
  viewContainer: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    paddingVertical:4,
  },
  viewContainerText:{
    color:"#47A0E9",
    textDecorationLine: 'underline',
  }
});



// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// export default function Prescriptions() {
//   return (
//     <View style={[styles.container, styles.shadow]}>
//       <View style={styles.row}>
//         <View style={styles.box}>
//           <Text style={[styles.text, styles.leftAlign]}>hello</Text>
//         </View>
//         <View style={styles.box}>
//           <Text style={[styles.text, styles.leftAlign]}>hello</Text>
//         </View>
//         <View style={styles.box}>
//           <Text style={[styles.text, styles.leftAlign]}>hello</Text>
//         </View>
//       </View>

//       <View style={styles.row}>
//         <View style={styles.box}>
//           <Text style={[styles.text, styles.leftAlign]}>hello</Text>
//         </View>
//         <View style={styles.box}>
//           <Text style={[styles.text, styles.leftAlign]}>helloqqqqqqqqqqwwwwwwwww</Text>
//         </View>
//         <View style={styles.box}>
//           <Text style={[styles.text, styles.leftAlign]}>hello</Text>
//         </View>
//       </View>

//       <View style={styles.row}>
//         <View style={styles.box}>
//           <Text style={[styles.text, styles.leftAlign]}>hello</Text>
//         </View>
//         <View style={styles.box}>
//           <Text style={[styles.text, styles.leftAlign]}>hello</Text>
//         </View>
//         <View style={styles.box}>
//           <Text style={[styles.text, styles.leftAlign]}>hello</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 10,
//     backgroundColor: "#fff",
//   },
//   row: {
//     flexDirection: "row",
//     marginBottom: 20,
//   },
//   box: {
//     flex: 1,
//     padding: 10,
//     justifyContent: "center",
//     alignItems: "flex-start", // Align text to start of the box
//   },
//   text: {
//     textAlign: "center",
//   },
//   leftAlign: {
//     textAlign: "left", // Align text to start of the box
//   },
//   shadow: {
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5, // for Android
//   },
// });
