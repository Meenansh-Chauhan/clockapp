import { useState } from "react";
import{View,Text,TouchableOpacity, StyleSheet} from "react-native";
export default function Stopwatch(){
const [text,Settext]= useState ("00:00:00:00");
const [Set,Res]= useState <Boolean>(false);
const [timer,Settimer]= useState <NodeJS.Timeout | null>(null);
let starttime =0;
let Clear : NodeJS.Timeout;
let usedtime=0;

const Rest=()=>{
    Res(true);
};

const Restt=()=>{
    Res(false);
};


function Start(){
if(!Set){
starttime = Date.now() - usedtime,
Clear = setInterval(Update,100),
Settimer(Clear);
Rest();  
}}


function Stop(){
  if (Set){
        clearInterval(timer);
        usedtime= Date.now()- starttime;
        Restt();
} }

function Reset(){
    clearInterval(timer);
    usedtime=0;
    Restt();
    Settext("00:00:00:00")
}

function Update(){
    const currenttime = Date.now();
    usedtime = currenttime - starttime;

    let hours = Math.floor(usedtime / (1000*60*60)).toString().padStart(2,"0") ; 
    let minutes = Math.floor(usedtime / (1000*60)%60).toString().padStart(2,"0");
    let seconds = Math.floor(usedtime / (1000)%60).toString().padStart(2,"0");
    let milisecond = Math.floor(usedtime%1000/10).toString().padStart(2,"0");

    
    Settext (`${hours}:${minutes}:${seconds}:${milisecond}`);
    

}


    
    return(
     <View style={style.body}>
        <Text style={style.text}>{text}</Text>
        
        <View style={style.btnbox}>
        <TouchableOpacity style={style.button} onPress={() => {Start()}}>
        <Text  style={style.btntext}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={() => {Stop()} }>
        <Text  style={style.btntext}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={() => {Reset()}}>
        <Text  style={style.btntext}>reset</Text>
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
    text:{
        borderRadius:200,
        fontSize:50,
        backgroundColor:'rgba(255,255,255,0.2)',
        color:'white',
        padding:20,
    },
    btntext:{
        fontSize:30,
        color:'black',
        },
    button:{
        borderRadius:200,
        fontSize:50,
        backgroundColor:'lightblue',
        padding:20,
        borderColor:'blue',
        margin:5,
        marginTop:30,
    },
    btnbox:{
       flexDirection:'row',
    },
})

