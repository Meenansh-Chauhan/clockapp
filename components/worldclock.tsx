import{View,Text,Modal,TouchableOpacity,StyleSheet} from "react-native";
import SvgComponent from '../assets/map'
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function WorldClock(){
    const [modalVisible, setModalVisible] = useState(false);
    return(
     <View style={style.body}>
      <TouchableOpacity style={style.button} onPress={() => setModalVisible(true) }> 
        <Text style={[{color:'gold',padding:10,fontSize:25}]} >Add Clock</Text> 
        </TouchableOpacity> 


        <Modal visible={modalVisible}>
        
        <SvgComponent></SvgComponent>
        <TouchableOpacity style={style.button} onPress={() => setModalVisible(false) }>    
             <Ionicons name="close-circle-outline" size={30} color="red"  />
        </TouchableOpacity>
        </Modal>
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
    button:{ 
        
        position:'absolute',
        top:20,
        right:20,
        borderRadius:100,
        backgroundColor:'rgba(255,255,255,0.4)',
        padding:5,
        margin:5,
      },
      modalscreen:{
        paddingTop:20,
        alignItems:'center',
        flex:1,
        backgroundColor:'black',
      },
})