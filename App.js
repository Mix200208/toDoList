
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

  }


  
});
