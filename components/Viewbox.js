import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const ViewBox = ({ text, color, deleteBox }) => {
  return (
    <View style={[styles.box, { backgroundColor: color || 'rgba(255,255,255,0.2)' }]}>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity onPress={deleteBox} accessibilityLabel="Delete item">
        <Ionicons name="trash-outline" size={20} color="gold" />
      </TouchableOpacity>
    </View>
  );
};

ViewBox.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  deleteBox: PropTypes.func.isRequired, // Add PropTypes for deleteBox
};

ViewBox.defaultProps = {
  color: 'rgba(255,255,255,0.2)',
};

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  text: {
    flex: 1,
    color: 'gold',
    fontSize: 18,
  },
});

export default ViewBox;
