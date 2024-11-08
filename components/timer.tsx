import{View,Text,TextInput,TouchableOpacity ,StyleSheet, Alert} from "react-native";
import { useState } from "react";
 

export default function Timer(){
const [hour,sethour]=useState<string>('');
const [min,setmin]=useState<string>('');
const [sec,setsec]=useState<string>('');

const Change3 = (text:string)=>{
    const digitsOnly = text.replace(/[^0-9]/g, '')
    sethour(digitsOnly);
}
const Change2 = (text:string)=>{
    const digitsOnly = text.replace(/[^0-9]/g, '')
    setmin(digitsOnly);
}
const Change = (text:string)=>{
    const digitsOnly = text.replace(/[^0-9]/g, '')
    setsec(digitsOnly);
}

    return(
     <View style={style.body}>
       <View style={{flexDirection:'row'}}>
       <TextInput
        style={style.input}
        value={hour}
        onChangeText={Change3}
        keyboardType="numeric"     
        maxLength={2}           
        placeholder="Enter hours"
      />
      <TextInput
        style={style.input}
        value={min}
        onChangeText={Change2}
        keyboardType="numeric"     
        maxLength={2}           
        placeholder="Enter minutes"
      />
      <TextInput
        style={style.input}
        value={sec}
        onChangeText={Change}
        keyboardType="numeric"     
        maxLength={2}           
        placeholder="Enter seconds"
      />
       </View>
        
        <View style={style.btnbox}>
        <TouchableOpacity style={style.button} onPress={() => Alert.alert("pressed")}>
        <Text  style={style.btntext}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={() => Alert.alert("pressed") }>
        <Text  style={style.btntext}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={() => Alert.alert("pressed")}>
        <Text  style={style.btntext}>Delete</Text>
        </TouchableOpacity>
        </View>
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
    input:{ 
        color:'gold',
        textAlign:'center',
        fontSize:20,
        borderColor:'white',
        margin:3,
        height:70,
        width:130,
        borderRadius:200,
        backgroundColor:'rgba(255,255,255,0.3)'
    },
    text:{
        borderRadius:200,
        color:'lightblue',
        fontSize:50,
        backgroundColor:'rgba(255,255,255,0.2)',
        padding:20,
    },
    btnbox:{ 
        flexDirection:'row'},
    button:{ 
        borderRadius:200,
        fontSize:50,
        backgroundColor:'lightblue',
        padding:20,
        borderColor:'blue',
        margin:5,
        marginTop:30,},
    btntext:{
          fontSize:30,
        color:'black'
    },
})

