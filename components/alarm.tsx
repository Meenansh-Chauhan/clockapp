import{View,Text, StyleSheet, Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const alarm=()=>{
    return (
        <View>
            <Text style ={{fontSize:20,color:'blue'}}>Hello</Text>
            {/* <Button onPress={()=> NavigationContainer.navigate("Alarm2")}>go to alarm 2 </Button> */}
            </View>
    );
}
const alarm2=()=>{
    return (
        <View>
            <Text style ={{fontSize:20,color:'blue'}}>Hello2</Text>
            {/* <Button onPress={()=> NavigationContainer.navigate("Alarm1")}> go to alarm 1</Button> */}
        </View>
    );
}



export default function Alarm(){
    return(
        <NavigationContainer independent >
            <Stack.Navigator>
                <Stack.Screen name="Alarm1" component={alarm}/>
                <Stack.Screen name="Alarm2" component={alarm2}/>
            </Stack.Navigator>
        </NavigationContainer>
     
    )
}

const style = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        borderRadius:200,
        color:'lightblue',
        fontSize:50,
        backgroundColor:'rgba(255,255,255,0.2)',
        padding:20,
    },
})