import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, {useState} from 'react';
import { Text, View , StyleSheet, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import Task from './componenter/Task';

export default function App() {
  const [task, setTask] = useState();

  const [taskItems, setTaskItems] = useState([]);


  const handleAddTask = () =>{
    
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Dagens påminnelse</Text>
     
       <View style = {styles.items}>
         {/* this is where task will go*/}
         {
           taskItems.map((item, index) => {
             
             return (
             <TouchableOpacity key= {index} onPress={() => completeTask(index)}>
               <Task text={item}/>

             </TouchableOpacity > 
             )
           })
         }
         
       </View>

      </View>


      <KeyboardAvoidingView
      behavior= {Platform.OS === "ios"? "padding" : "height"}
      style={styles.writeTaskRapper}
      >
        <TextInput style= {styles.input} placeholder = {"Skriv en påminnelse"} value={task} onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress = {() => handleAddTask()}>
          <View style= {styles.addWrapper}>
            <Text style = {styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    
    </View>
  );



  };


  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E8EAED",
    },
    taskWrapper: {
      paddingTop:80,
      paddingHorizontal:20,
      
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: "bold"

    },
    items: {
      marginTop:30
    },
    writeTaskRapper: {
      position: "absolute",
      bottom: 60,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",

    },
    input:{
      paddingVertical: 15,
      width: 250,
      paddingHorizontal:15,
      backgroundColor: "#FFF",
      borderRadius: 60,
      borderColor: "#C0C0C0",
      width: 250,
      borderWidth: 1
      

    },
    addWrapper:{
      width : 60,
      height: 60,
      backgroundColor: "#fff",
      borderRadius: 60,
      alignItems: "center",
      justifyContent: "center",
      borderColor: "#C0C0C0",
      borderWidth: 1,


    }
    ,
    addText: {
      fontSize:20,
      fontWeight: "bold",

    },


  });
