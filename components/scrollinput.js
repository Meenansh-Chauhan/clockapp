import React, { useState,useEffect } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Alarm from './alarm';

export default function ScrollInput() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const createTimeArray = (max) => {
    return Array.from({ length: max }, (_, i) => i);
  };

  const handleScroll = (unit, value) => {
    if (unit === 'hours') setHours(value);
    if (unit === 'minutes') setMinutes(value);
    if (unit === 'seconds') setSeconds(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>

        <View style={styles.timeUnit}>
          <Text style={styles.label}>Hours</Text>
          <ScrollView
            style={styles.scrollViewContainer}
            showsVerticalScrollIndicator={false}
            snapToInterval={45} 
            decelerationRate="fast"
            onMomentumScrollEnd={(e) => {
              const index = Math.ceil(e.nativeEvent.contentOffset.y / 45);
              handleScroll('hours', index);

            }}
          >
            {createTimeArray(24).map((hour) => (
              <TouchableOpacity
                key={hour}
                style={[styles.timeBox, hours === hour && styles.selectedBox]}
              >
                <Text style={styles.timeText}>{hour}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <Text style={styles.colon}>:</Text>

        <View style={styles.timeUnit}>
          <Text style={styles.label}>Minutes</Text>
          <ScrollView
            style={styles.scrollViewContainer}
            showsVerticalScrollIndicator={false}
            snapToInterval={45}
            decelerationRate="fast"
            onMomentumScrollEnd={(e) => {
              const index = Math.ceil(e.nativeEvent.contentOffset.y / 45);
              handleScroll('minutes', index);
            }}
          >
            {createTimeArray(60).map((minute) => (
              <TouchableOpacity
                key={minute}
                style={[styles.timeBox, minutes === minute && styles.selectedBox]}
              >
                <Text style={styles.timeText}>{minute}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <Text style={styles.colon}>:</Text>

        <View style={styles.timeUnit}>
          <Text style={styles.label}>Seconds</Text>
          <ScrollView
            style={styles.scrollViewContainer}
            showsVerticalScrollIndicator={false}
            snapToInterval={45}
            decelerationRate="fast"
            onMomentumScrollEnd={(e) => {
              const index = Math.ceil(e.nativeEvent.contentOffset.y / 45);
              handleScroll('seconds', index);
            }}
          >
            {createTimeArray(60).map((second) => (
              <TouchableOpacity
                key={second}
                style={[styles.timeBox, seconds === second && styles.selectedBox]}
              >
                <Text style={styles.timeText}>{second}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
            <Alarm hour={hours} minutes={minutes} sec={seconds} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
  },
  timeUnit: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  scrollViewContainer: {
    paddingVertical: 10,
    maxHeight: 140,
  },
  timeBox: {
    flexWrap: 'wrap',
    width: 70,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',
    borderRadius: 10,
    marginBottom: 5,
  },
  selectedBox: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  timeText: {
    color: 'gold',
    fontSize: 18,
  },
  colon: {
    color: 'gold',
    paddingTop: 35,
    fontSize: 40,
  },
});
