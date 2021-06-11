import React from 'react'
import { TouchableOpacity,View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { Color } from '../color'

const Task = (props) => {
    return(
        <View style = {styles.elements}>
            <View style = {styles.elementsLeft}>
                <View style = {styles.square}><AntDesign name="checksquareo" size={24} color="black" /></View>
                <Text style = {styles.text_task}>{props.text}</Text>
            </View>
            
            <View style = {styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
    elements:{
        backgroundColor:"white",
        padding:15,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:15,


        
    },
    elementsLeft:{
        flexDirection:"row",
        alignItems:"center",
        flexWrap:"wrap"
    },
    circular:{},

    square:{

        width:24,
        height:24,
        opacity: 0.4,
        borderRadius:4,
        marginRight:15,


    },

    text_task:{
        maxWidth:'75%'


    },
    circular:{
        width: 12,
        height: 12,
        borderColor:Color.TASK_ITEM,
        borderWidth:2,

    }
}
)

export default Task;