
import React from 'react';
import {TouchableOpacity,KeyboardAvoidingView, Platform, StyleSheet, Text, View ,TextInput} from 'react-native';
import { Color } from './src/color';
import Task from './src/components/Task'
export default function App() {
  return (
    <View style={styles.container}>

      

      <View style = {styles.titleWrapper}>
          
          <Text style = {styles.textTitle}>Список задач</Text>
      
          <View style = {styles.elements}>
            <Task text = {"1 задача"}/>
            <Task text = {"2 задача"}/>

           

            </View>
            
        </View>

          <KeyboardAvoidingView behavior = {Platform.OS === "android" ? "height":"padding"} 
            style = {styles.writeTask}>
              <TextInput style = {styles.input} placeholder = {"Напишите вашу задачу"}/>
              <TouchableOpacity>
                  <View style = {styles.addWrapper}>
                      <Text style = {styles.addText}>+</Text>
                  </View>
              </TouchableOpacity>
          </KeyboardAvoidingView>

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BACK_COLOR,
    


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
  addText:{}


  
});
