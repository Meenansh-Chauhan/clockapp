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
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        borderRadius:200,
        color:'lightblue',
        fontSize:40,
        backgroundColor:'rgba(255,255,255,0.2)',
        padding:20,
    },
})