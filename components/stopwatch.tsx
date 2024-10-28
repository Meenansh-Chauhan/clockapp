import{View,Text, StyleSheet} from "react-native";
 
export default function Stopwatch(){
    return(
     <View style={style.body}>
        <Text style={style.text}>00:00:00</Text>
     </View>
    )
}

const style = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'purple',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:50,
        backgroundColor:'lightgreen',
        padding:20,
    },
})