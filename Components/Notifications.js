import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, TouchableHighlight } from 'react-native';

export default function Notifications() {
  const [isPressed, setIsPressed] = useState([true, false, false, false]);

  const handlePressIn = (index) => {
    const updatedPressedState = [...isPressed];
    updatedPressedState[index] = true;
    setIsPressed(updatedPressedState);
  };

  const handlePressOut = (index) => {
    const updatedPressedState = [...isPressed];
    updatedPressedState[index] = false;
    setIsPressed(updatedPressedState);
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={[
          styles.notificationContainer,
          isPressed[0] && { backgroundColor: '#EFF7FC' },
        ]}
        underlayColor="#EFF7FC"
        onPressIn={() => handlePressIn(0)}
        onPressOut={() => handlePressOut(0)}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.notificationText}>Dr. Bharath has issued a medical prescription.</Text>
          <Text style={styles.dateText}>Thu, 18 Apr 2024 17:00</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        style={[
          styles.notificationContainer,
          isPressed[1] && { backgroundColor: 'lightblue' },
        ]}
        underlayColor="lightblue"
        onPressIn={() => handlePressIn(1)}
        onPressOut={() => handlePressOut(1)}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.notificationText}>Dr. Bharath has issued a medical prescription.</Text>
          <Text style={styles.dateText}>Thu, 18 Apr 2024 17:00</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={[
          styles.notificationContainer,
          isPressed[2] && { backgroundColor: 'lightblue' },
        ]}
        underlayColor="lightblue"
        onPressIn={() => handlePressIn(2)}
        onPressOut={() => handlePressOut(2)}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.notificationText}>Dr. Bharath has issued a medical prescription.</Text>
          <Text style={styles.dateText}>Thu, 18 Apr 2024 17:00</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={[
          styles.notificationContainer,
          isPressed[3] && { backgroundColor: 'lightblue' },
        ]}
        underlayColor="lightblue"
        onPressIn={() => handlePressIn(3)}
        onPressOut={() => handlePressOut(3)}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.notificationText}>Dr. Bharath has issued a medical prescription.</Text>
          <Text style={styles.dateText}>Thu, 18 Apr 2024 17:00</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingTop: Platform.OS === 'android' ? 15 : 0,
  },
  notificationContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    marginBottom: 10,
   
  },
  innerContainer: {
    paddingVertical: 25,
    paddingHorizontal:0.1,
    //alignItems:"flex-end",
  },
  notificationText: {
    letterSpacing: 1,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    paddingHorizontal:7,
  },
  dateText: {
    position: 'absolute',
    bottom: 0,
    right: 7,
    color: '#D9D9D9',
    marginBottom: 5,
  },
});
