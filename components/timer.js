import {
    View,
    Modal,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert,
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { Audio } from 'expo-av';
  import ScrollInput from './scrollinput'


  export default function Timer(X) {
    const [modalscn, setmodalscn] = useState(false);
    const [hour, sethour] = useState("");
    const [min, setmin] = useState("");
    const [sec, setsec] = useState("");
    const [run, setrun] = useState(false);
    const [period, setperiod] = useState(0);
    const [textt, settextt] = useState("");
    const [timer, settimer] = useState(null);
  
    const start = () => {
      if (!run) {
        const hr = parseInt(hour || "0", 10);
        const mn = parseInt(min || "0", 10);
        const sc = parseInt(sec || "0", 10);
  
        if (mn >= 60 || sc >= 60 || hr < 0 || mn < 0 || sc < 0) {
          Alert.alert("Invalid Time", "Please enter a valid time.");
          return;
        } 
  
        const totalSeconds = hr * 3600 + mn * 60 + sc;
        setperiod(totalSeconds);
        setrun(true);
        setmodalscn(true);
  
        const interval = setInterval(() => {
          setperiod((prev) => {
            if (prev <= 1) {
              clearInterval(interval);
              settimer(null);
              setrun(false);
              setmodalscn(false);
              Alert.alert("Time's up!");
              playSound();
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
  
        settimer(interval);
      }
    };
  
    const stop = () => {
      clearInterval(timer);
      settimer(null);
      setrun(false);
      setmodalscn(false);
      setperiod(0);
      settextt("");
    };
  
    const formatTime = (seconds) => {
      const hours = Math.floor(seconds / 3600)
        .toString()
        .padStart(2, "0");
      const minutes = Math.floor((seconds % 3600) / 60)
        .toString()
        .padStart(2, "0");
      const secs = (seconds % 60).toString().padStart(2, "0");
      return `${hours}:${minutes}:${secs}`;
    };
  
    const playSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/ringtone.mp3')
      );
      await sound.playAsync();
    }; 
    const generatePickerData = (limit) =>
        Array.from({ length: limit }, (_, index) => ({
          label: index.toString().padStart(2, "0"),
          value: index,
        }));

    return (
     
      <View style={style.body}>
        <View style={{ flexDirection: "row" }}>
        <ScrollInput > 
        
        </ScrollInput>
      

         

        </View>
          
        <View style={style.btnbox}>
          <TouchableOpacity style={style.button} onPress={start}>
            <Text style={style.btntext}>Start</Text>
          </TouchableOpacity>
  
          
        </View>
  
        <Modal visible={modalscn} onRequestClose={stop}>
          <View style={style.modalscn}>
            <View style={style.timerDisplay}>
              <Text style={style.disptext}>{formatTime(period)}</Text>
            </View>
            <TouchableOpacity style={style.button} onPress={stop}>
              <Text style={style.btntext}>Stop</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
  
  const style = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: "black",
      justifyContent: "center",
      alignItems: "center",
    },
    input: {
      color: "gold",
      textAlign: "center",
      fontSize: 20,
      borderColor: "white",
      padding: 30,
      borderRadius: 200,
      backgroundColor: "rgba(255,255,255,0.3)",
      margin: 5,
    },
    btnbox: {
      flexDirection: "row",
    },
    button: {
      borderRadius: 200,
      backgroundColor: "lightblue",
      padding: 20,
      margin: 5,
      marginTop: 30,
    },
    btntext: {
      fontSize: 20,
      color: "black",
    }, 
    disptext: {
      fontSize: 20,
      color: "gold",
      fontSize:50,
    },
    modalscn: {
      flex: 1,
      backgroundColor: "black",
      justifyContent: "center",
      alignItems: "center",
    },
    timerDisplay: {
      backgroundColor: "rgba(255,255,255,0.2)",
      padding: 50,
      borderRadius: 300,
    },
  
    
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 8,
      color: 'black',
      backgroundColor: '#f9f9f9', // Light background for input box
    },
    inputAndroid: {
     
      fontSize: 60,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: 'gold',
      borderRadius: 8,
      color: 'red',

    },
    iconContainer: {
      top: 10,
      color:'red',
      fontSize:50,
      backgroundColor:'red',
      right: 10,
    },
    placeholder: {
      color: 'red',
      fontStyle: 'italic',
    },
  
  
    
  });

  