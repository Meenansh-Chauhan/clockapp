import{ScrollView,TouchableOpacity,Text,StyleSheet} from "react-native";
import { useState } from "react";
import Viewbox from './Viewbox';



export default function Alarm(){
    const [viewboxes, setViewBoxes] = useState([]);

    const addViewBox = () => {
      setViewBoxes([
        ...viewboxes,
        { id: viewboxes.length + 1, color:'rgba(255,255,255,0.2)',textColor:'gold' }
      ]);
    };
        return(
<ScrollView style={style.body}>
      <TouchableOpacity style={style.button} onPress={() =>  {addViewBox()} }> 
        <Text style={{fontSize:50,color:'gold'}}>+</Text>
        </TouchableOpacity>  
      
      {viewboxes.map((box) => (
        <Viewbox key={box.id} text={`Alarm ${box.id}`} color={box.color} textColor={box.textColor} />
      ))}
</ScrollView>
        )}

const style = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'black',
        paddingTop:90
    },
    button:{ 
      position:'fixed',
      top:10,
      right:20,
      borderRadius:200,
      backgroundColor:'rgba(255,255,255,0.13)',
      padding:5,
      borderColor:'gold',
      margin:5,},
})