import React, { useState } from 'react';
import { ScrollView, Modal, View, TouchableOpacity,TextInput,Text, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ViewBox from './Viewbox';

export default function Alarm() {
  const [viewboxes, setViewBoxes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [hour, sethour] = useState("");
    const [min, setmin] = useState("");
    const [sec, setsec] = useState("");

  const addViewBox = () => {
    setViewBoxes([
      ...viewboxes,
      { id: viewboxes.length + 1, color: 'rgba(255,255,255,0.2)', textColor: 'gold' }
    ]);
    setModalVisible(false);
  };

  const deleteBox = (id) => {
    setViewBoxes(viewboxes.filter((box) => box.id !== id));
  };

  return (
    <ScrollView style={styles.body}>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={{ fontSize: 50, color: 'gold' }}>+</Text>
      </TouchableOpacity>

      {viewboxes.map((box) => (
        <ViewBox
          key={box.id}
          text={`Alarm ${box.id}`}
          color={box.color}
          deleteBox={() => deleteBox(box.id)} // Pass delete function
        />
      ))}

      <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalscreen}>
          <Text style={{ color: 'gold', fontSize: 30 }}>SET NEW ALARM</Text>
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
            <Ionicons name="return-down-back-outline" size={20} color="gold" />
          </TouchableOpacity>

          <View style={[{ flexDirection: "row", paddingTop:70 }]}>
          <TextInput
            style={styles.input}
            value={hour}
            onChangeText={(text) => sethour(text.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            maxLength={2}
            placeholder="HH"
            placeholderTextColor={"white"}
          />
          <TextInput
            style={styles.input}
            value={min}
            onChangeText={(text) => setmin(text.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            maxLength={2}
            placeholder="MM"
            placeholderTextColor={"white"}
          />
          <TextInput
            style={styles.input}
            value={sec}
            onChangeText={(text) => setsec(text.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
            maxLength={2}
            placeholder="SS"
            placeholderTextColor={"white"}
          />
          
        </View>

          <TouchableOpacity style={ { margin: 90 }} >
            <Text style={[{ color: 'gold', fontSize:40 }]}>DATE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.addbutton, { margin: 90 }]} onPress={addViewBox}>
            <Text style={{ color: 'gold' }}>ADD</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 20,
  },
  input: {
    color: "gold",
    textAlign: "center",
    fontSize: 20,
    borderColor: "white",
    padding: 30,
    borderRadius: 200,
    backgroundColor: "rgba(255,255,255,0.3)",
    margin: 5,},
  
  button: {
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.13)',
    padding: 20,
    margin: 5,
  },
  addbutton: {
    position: 'absolute',
    fontSize: 20,
    bottom: 0,
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.13)',
    padding: 15,
    margin: 5,
  },
  modalscreen: {
    paddingTop: 20,
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'black',
  },
});
 