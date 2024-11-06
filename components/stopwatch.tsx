import { useState } from "react";
import{View,Text,Button,TouchableOpacity, StyleSheet} from "react-native";
export default function Stopwatch(){
const [text,settext]= useState ("00:00:00");
const [def,res]= useState (false);
let starttime =0;
let timer : NodeJS.Timeout;
let usedtime=0;
let running =def;

function start(){
if(!running){
starttime = Date.now() - usedtime;
timer = setInterval(update,100);
res(true);
}
}

function stop(){
    if(running){
        clearInterval(timer);
        usedtime= Date.now()- starttime;
        res(false);
    }
} 

function reset(){
    clearInterval(timer);
    usedtime=0;
    res(false);
}

function update(){
    const currenttime = Date.now();
    usedtime = currenttime - starttime;

    let hours = Math.floor(usedtime / (1000*60*60)); 
    let minutes = Math.floor(usedtime / (1000*60)%60);
    let seconds = Math.floor(usedtime / (1000)%60);
    let milisecond = Math.floor(usedtime%1000/10);

    // hours=String(hours).padStart(2,"0");
    // minutes=String(minutes).padStart(2,"0");
    // seconds=String(seconds).padStart(2,"0");
    // milisecond=String(milisecond).padStart(2,"0");

    settext (`${hours}:${minutes}:${seconds}:${milisecond}`);
    

}


    
    return(
     <View style={style.body}>
        <Text style={style.text}>{text}</Text>
        
        <View style={style.btnbox}>
        <TouchableOpacity style={style.button} onPress={() => {start()}}>
        <Text  style={style.btntext}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={() => {stop()} }>
        <Text  style={style.btntext}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={() => {reset()}}>
        <Text  style={style.btntext}>reset</Text>
        </TouchableOpacity>
        </View>
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
        backgroundColor:'gold',
        color:'blue',
        padding:20,
    },
    btntext:{
        fontSize:30,
        color:'gold',
        },
    button:{
        fontSize:50,
        backgroundColor:'green',
        padding:20,
        borderColor:'blue',
        margin:5,
    },
    btnbox:{
       flexDirection:'row',
    },
})

