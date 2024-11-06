import{View,Text, StyleSheet} from "react-native";
 
export default function Alarm(){
    return(
     <View style={style.body}>
        <Text style={style.text}>Alarm Page</Text>
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
        color:'blue',
        fontSize:50,
        backgroundColor:'gold',
        padding:20,
    },
})