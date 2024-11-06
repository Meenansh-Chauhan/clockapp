import{View,Text, StyleSheet} from "react-native";
 
export default function Timer(){
    return(
     <View style={style.body}>
        <Text style={style.text}>00:00:00:00</Text>
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

