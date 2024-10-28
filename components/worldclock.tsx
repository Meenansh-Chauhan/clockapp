import{View,Text, StyleSheet} from "react-native";
 
export default function WorldClock(){
    return(
     <View style={style.body}>
        <Text style={style.text}>World Clock Page</Text>
     </View>
    )
}

const style = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'brown',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:40,
        backgroundColor:'gold',
        padding:20,
    },
})