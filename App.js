
import React, { useState } from 'react';
import {ImageBackground,TouchableOpacity,KeyboardAvoidingView, Platform, StyleSheet, Text, View ,TextInput, Keyboard} from 'react-native';
import { Color } from './src/color';
import Task from './src/components/Task'
import { AntDesign } from '@expo/vector-icons';



export default function App() {

  const  [text_task,setTask] = useState()

  const [taskItems, setTaskItems] = useState([])




  const handelAddTask = () => {

      Keyboard.dismiss()
      setTaskItems([...taskItems,text_task])
      setTask(null)
  }

  const RemoveTask = (index) =>{

    let itemsCopy = [...taskItems]
    itemsCopy.splice(index,1)
    setTaskItems(itemsCopy)

  }
  return (

    <ImageBackground source ={require('./src/back.png')} style ={styles.backgroundImage}>

    

    


    <View style={styles.container}>

      
    

    
      <View style = {styles.titleWrapper}> 
          
          <Text style = {styles.textTitle}>Список задач</Text>
      
          <View style = {styles.elements}>
            
             { taskItems.map((item,index) => { return(

                <TouchableOpacity key = {index} onPress = {() => RemoveTask()}>
                      <Task key = {index} text ={item}/>
                </TouchableOpacity>
                )})
             }
            </View>
            
             
        </View>

          <KeyboardAvoidingView behavior = {Platform.OS === "android" ? "height":"padding"} 
            style = {styles.writeTask}>
              <TextInput style = {styles.input} placeholder = {"Напишите вашу задачу"} value = {text_task} onChangeText = {text => setTask(text)} />
             <TouchableOpacity  onPress = {() => handelAddTask()}>
                  <View style = {styles.addWrapper}>
                      <Text style = {styles.addText}><AntDesign name="checkcircleo" size={24} color="black" /></Text>
                  </View>
              </TouchableOpacity>
          </KeyboardAvoidingView>
    

          
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: Color.BACK_COLOR,
    


  },

  titleWrapper:{
      paddingTop: 80,
      paddingHorizontal:20
      
  },
  textTitle:{
    fontSize:24,
    
    fontWeight:"bold",
    color:"black",
    paddingLeft:100,
    paddingBottom:10
        
  },
  elements:{
    padding:0,

  },
  writeTask:{
    position:"absolute",
    bottom:60,
    width: "100%",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems: "center"
    
  },

  input:{

    paddingVertical : 15,
    width: 250,
    paddingHorizontal:20,
    backgroundColor:"white",
    borderRadius:60,
    borderColor: Color.TASK_ITEM,
    borderWidth: 0.5
    
    

  },
  addWrapper:{
    
    width: 60,
    height:60,
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:60,
    borderColor: Color.TASK_ITEM,
    borderWidth: 0.5

  },
  addText:{},
  backgroundImage:{
        width: '100%',
        height: '100%',
        flex: 1 
  }


  
});
