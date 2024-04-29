// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Home from "./Home";
// import Prescriptions from "./Prescriptions";
// import Notifications from "./Notifications";
// import Profile from "./Profile";
// import { StyleSheet } from "react-native";

// const Tab = createBottomTabNavigator();

// export default function Tabbar() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         tabBarOptions={{
//           style: { backgroundColor: "#f0f0f0" }, // Set background color here
//         }}
//       >
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Prescriptions" component={Prescriptions} />
//         <Tab.Screen name="Notifications" component={Notifications} />
//         <Tab.Screen name="Profile" component={Profile} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }




// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import icons from Expo
// import Home from "./Home";
// import Prescriptions from "./Prescriptions";
// import Notifications from "./Notifications";
// import Profile from "./Profile";
// import { StyleSheet } from "react-native";

// const Tab = createBottomTabNavigator();

// export default function Tabbar() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         tabBarOptions={{
//           style: { backgroundColor: "#f0f0f0" }, // Set background color here
//         }}
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'Prescriptions') {
//               iconName = focused ? 'clipboard-pulse' : 'clipboard-pulse-outline';
//             } else if (route.name === 'Notifications') {
//               iconName = focused ? 'bell' : 'bell-outline';
//             } else if (route.name === 'Profile') {
//               iconName = focused ? 'account' : 'account-outline';
//             }

//             // Return an icon component
//             return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
//           },
//         })}
//       >
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Prescriptions" component={Prescriptions} />
//         <Tab.Screen name="Notifications" component={Notifications} />
//         <Tab.Screen name="Profile" component={Profile} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import icons from Expo
import Home from "./Home";
import Prescriptions from "./Prescriptions";
import Notifications from "./Notifications";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

export default function Tabbar() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: { backgroundColor: "#f0f0f0" }, // Set background color here
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Prescriptions') {
            iconName = focused ? 'clipboard-pulse' : 'clipboard-pulse-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'bell' : 'bell-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
          }

          // Return an icon component
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
   
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Prescriptions" component={Prescriptions} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
