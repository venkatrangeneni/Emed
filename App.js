
// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import icons from Expo
// import Signuppage from './Components/Signuppage';
// import Profile from './Components/Profile';
// import Myqrcode from './Components/Myqrcode';
// import Myprofilesecond from './Components/Myprofilesecond';
// import Login from './Components/Login';
// import Home from "./Components/Home";
// import Prescriptions from "./Components/Prescriptions";
// import Notifications from "./Components/Notifications";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const Tabbar = () => {
//   return (
//     <Tab.Navigator 
//       tabBarOptions={{
//         style: { backgroundColor: "#f0f0f0", }, 
//       }}
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Home') {
//             iconName = focused ? 'home' : 'home-outline';
//           } else if (route.name === 'Prescriptions') {
//             iconName = focused ? 'clipboard-pulse' : 'clipboard-pulse-outline';
//           } else if (route.name === 'Notifications') {
//             iconName = focused ? 'bell' : 'bell-outline';
//           } else if (route.name === 'Profile') {
//             iconName = focused ? 'account' : 'account-outline';
//           }

       
//           return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
//         },
//       })}
//     >
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Prescriptions" component={Prescriptions} />
//       <Tab.Screen name="Notifications" component={Notifications} />
//       <Tab.Screen name="Profile" component={Profile} />
//     </Tab.Navigator>
//   );
// };

// export default function App() {
//     return (
//         <View style={styles.container}>
//             <NavigationContainer>
//                 <Stack.Navigator initialRouteName="Login">
//                     <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}  />
//                     <Stack.Screen name="Signuppage" component={Signuppage}   options={{ headerShown: false }}/>
//                     <Stack.Screen
//                       name="Tabnavigation"
//                       component={Tabbar}
//                       options={{ headerShown: false }} 
//                     />
//                     <Stack.Screen name="Myqrcode" component={Myqrcode} />
//                     <Stack.Screen name="Myprofilesecond" component={Myprofilesecond} />
//                 </Stack.Navigator>
//             </NavigationContainer>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });



import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import icons from Expo
import Signuppage from './Components/Signuppage';
import Profile from './Components/Profile';
import Myqrcode from './Components/Myqrcode';
import Myprofilesecond from './Components/Myprofilesecond';
import Login from './Components/Login';
import Home from "./Components/Home";
import Prescriptions from "./Components/Prescriptions";
import Notifications from "./Components/Notifications";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabbar = () => {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        style: { backgroundColor: "#f0f0f0", }, // Set background color here
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
      <Tab.Screen name="Profile" component={ProfileTab} options={{headerShown:false}} />
      
    </Tab.Navigator>
  );
};

const ProfileTab=()=>{

  const ProfileStack = createNativeStackNavigator();

  return(
<ProfileStack.Navigator   initialRouteName="Profile" > 
     <ProfileStack.Screen   name="Profile" component={Profile}   />
         <ProfileStack.Screen name="Myqrcode" component={Myqrcode}    />
         <ProfileStack.Screen name="Myprofilesecond" component={Myprofilesecond}    />
       
         </ProfileStack.Navigator>
       // Any additional screens located inside the stack of the tab Home

  )
}

export default function App() {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}  />
                    <Stack.Screen name="Signuppage" component={Signuppage}   options={{ headerShown: false }}/>
                   
                    <Stack.Screen
                      name="Tabnavigation"
                      component={Tabbar}
                      options={{ headerShown: false }} 
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    color:"pink",
  },
});