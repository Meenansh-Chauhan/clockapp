import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View,SafeAreaView} from 'react-native';
import { DateTime } from 'luxon';

const getTimeInTimeZone = (timeZone) => {
    return DateTime.now().setZone(timeZone).toFormat('T');
};

const timeZones = [

    { label: 'London', value: 'Europe/London', color: '#93E2E0' },
    { label: 'Tokyo', value: 'Asia/Tokyo', color: '#DCA0E3' },
    { label: 'Sydney', value: 'Australia/Sydney', color: '#F1DD8B' },
    { label: 'Indian Time Zone', value: 'Asia/Kolkata', color: '#DE9181' },
    { label: 'United States', value: 'America/New_York', color: '#8189DE' },
    { label: 'United Kingdom', value: 'Europe/London', color: '#93E2E0' },
    { label: 'Japan', value: 'Asia/Tokyo', color: '#DCA0E3' },
    { label: 'Australia', value: 'Australia/Sydney', color: '#F1DD8B' },
    { label: 'Canada', value: 'America/Toronto', color: '#F1DD8B' },
    { label: 'Germany', value: 'Europe/Berlin', color: '#93E2E0' },
    { label: 'France', value: 'Europe/Paris', color: '#F1DD8B' },
    { label: 'China', value: 'Asia/Shanghai', color: '#F1DD8B' },
    { label: 'Brazil', value: 'America/Sao_Paulo', color: '#93E2E0' },
    { label: 'India', value: 'Asia/Kolkata', color: '#DE9181' },
    { label: 'South Africa', value: 'Africa/Johannesburg', color: '#8189DE' },
    { label: 'Mexico', value: 'America/Mexico_City', color: '#F1DD8B' },

];

const countryTimeZones = {
    'United States': 'America/New_York',
    'United Kingdom': 'Europe/London',
    'Japan': 'Asia/Tokyo',
    'Australia': 'Australia/Sydney',
    'Canada': 'America/Toronto',
    'Germany': 'Europe/Berlin',
    'France': 'Europe/Paris',
    'China': 'Asia/Shanghai',
    'Brazil': 'America/Sao_Paulo',
    'India': 'Asia/Kolkata',
    'South Africa': 'Africa/Johannesburg',
    'Mexico': 'America/Mexico_City',

};

export default function TimeZoner({value}) {
    const [selectedTimeZone, setSelectedTimeZone] =
        useState(timeZones[0].value);
    const [time, setTime] =
        useState(DateTime.now());
  

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(DateTime.now());
        }, 1000);
 return () => clearInterval(interval);
    }, []);

    const renderClock = () => {
         return (
                <Text style={[styles.digitalClock,{color:'gold'}]}>
                    {getTimeInTimeZone(selectedTimeZone)}
                </Text>
            ); 
    };

    return ( 
        <SafeAreaView style={styles.container}>
            <View style={styles.controlsContainer}>
                <View style={styles.timezonePicker}>
                    <View style={styles.country}>
                        <Text style={{ fontWeight: 'bold' }}>
                            Select Country
                        </Text>        
                        {setSelectedTimeZone(timeZones[{value}])};
                    </View>
                </View>
               
            </View>
            <View style={styles.clockContainer}>
                <View style={ [styles.colorMarker,{backgroundColor:'black'} ]} />
                <Text style={[styles.title, {color:'gold'}]}>
                    {timeZones.find((zone) =>zone.value === selectedTimeZone).label}
                </Text>
                {renderClock()}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'black',
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },

    timezonePicker: {
        marginBottom: 20,
    },
    clockContainer: {
        alignItems: 'center',
    },

    title: {
        fontSize: 23,
        marginBottom: 10,
    },
    digitalClock: {
        fontSize: 20,
    }, 
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
    },

    clockTypePicker: {
        flex: 1,
        marginLeft: 10,
    },
    country: {
        padding: 10,
        borderRadius: 20,
        marginTop: 20,
        backgroundColor: 'lightgreen',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },

});