import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const TimerPicker = ( ) => {
  const [hours, setHours] = useState(0);

  const generatePickerData = (limit) =>
    Array.from({ length: limit }, (_, index) => ({
      label: index.toString().padStart(2, "0"),
      value: index,
    }));

  return (
    <View style={styles.container}>
     
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setHours(value)}
          items={generatePickerData(24)} // For hours
          placeholder={{ label: "00", value: 0 }}
          style={pickerStyles}
        />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  colon: {
    fontSize: 24,
    marginHorizontal: 5,
  },
});

const pickerStyles = {
  inputIOS: {
    fontSize: 22,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    color: "black",
    paddingRight: 30, // To ensure text is not truncated
  },
  inputAndroid: {
    fontSize: 22,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    color: "black",
    paddingRight: 30, // To ensure text is not truncated
  },
};

export default TimerPicker;
