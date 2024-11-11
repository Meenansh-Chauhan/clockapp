// components/ViewBox.js
import React from 'react';
import { View,TouchableOpacity,Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Function to create a reusable View Box component
const ViewBox = ({ text, color }) => {
  return (
    <View style={[styles.box, { backgroundColor: color || 'rgba(255,255,255,0.2)' }]}>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity><Ionicons name="trash-outline"size={20} color="gold" /></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: { 
    flexDirection:'row',
    alignSelf:'stretch',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: { 
    flex:1,
    color: 'gold',
    fontSize: 18,
  },
});

export default ViewBox;
