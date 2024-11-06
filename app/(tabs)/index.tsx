import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text,View } from "react-native";
import Timer from "@/components/timer";
import Stopwatch from "@/components/stopwatch";
import WorldClock from "@/components/worldclock";
import Alarm from "@/components/alarm";
import { Ionicons } from "@expo/vector-icons";

const Tab=createBottomTabNavigator();
const fxn=()=>{
    return (
        <View><Text>Hello</Text></View>
    );
}

export default function App(){
    return(
        <NavigationContainer independent >
            <Tab.Navigator screenOptions={{
                tabBarActiveBackgroundColor:'gold',
                tabBarInactiveBackgroundColor:'plum',
                headerStyle:{backgroundColor:'plum'}}}>
                
                <Tab.Screen name="Alarm" component={Alarm} options={{tabBarIcon:()=><Ionicons name="paper-plane" size={30}  />}} />
                <Tab.Screen name="Clock" component={WorldClock} options={{tabBarIcon:()=><Ionicons name="aperture" size={30}/>}} />
                <Tab.Screen name="Timer" component={Timer} options={{tabBarIcon:()=><Ionicons name="download" size={30}/>}} />
                <Tab.Screen name="Stopwatch" component={Stopwatch} options={{tabBarIcon:()=><Ionicons name="bluetooth" size={30}/>}} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}