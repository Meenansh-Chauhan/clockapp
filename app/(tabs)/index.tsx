import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text,View } from "react-native";
import Timer from "@/components/timer";
import Stopwatch from "@/components/stopwatch";
import WorldClock from "@/components/worldclock";
import Alarm from "@/components/alarm";
import { Ionicons } from "@expo/vector-icons";

const Tab=createBottomTabNavigator();


export default function App(){
    return(
        <NavigationContainer independent >
            <Tab.Navigator screenOptions={{
                tabBarActiveBackgroundColor:'rgb(40,40,40)',
                tabBarInactiveBackgroundColor:'black',
                headerStyle:{backgroundColor:'black',borderBottomColor:'gold',borderBottomWidth:1},
                headerTitleStyle:{color:'white'},
                tabBarStyle: {borderTopColor: 'gold', height:60},
                tabBarLabelStyle:{fontSize:15, color:'white'}}}>
                
                <Tab.Screen name="Alarm" component={Alarm} options={{tabBarIcon:()=><Ionicons name="alarm-outline" size={30} color={'white'}  />}} />
                <Tab.Screen name="Clock" component={WorldClock} options={{tabBarIcon:()=><Ionicons name="time-outline" size={30} color={'white'}/>}} />
                <Tab.Screen name="Timer" component={Timer} options={{tabBarIcon:()=><Ionicons name="timer-outline" size={30} color={'white'}/>}} />
                <Tab.Screen name="Stopwatch" component={Stopwatch} options={{tabBarIcon:()=><Ionicons name="stopwatch-outline" size={30} color={'white'}/>}} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}