import { StatusBar } from "expo-status-bar";
import *as Notifications from 'expo-notifications';
import { useEffect, useState } from "react";
import { LogBox } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Alarm from 'react-native-alarm-feature';

Alarm.setAlarm({ 
    message: "Wake up!", 
    time: new Date().getTime() + 5000 
  });