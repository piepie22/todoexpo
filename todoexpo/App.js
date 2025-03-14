import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, Platform, View } from 'react-native';
import { CheckBox } from '@rneui/themed';

//stylesheets (css type)
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0, 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 130, 
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, 
    marginTop: 10,
  },
  taskText: {
    marginLeft: 10, 
    fontSize: 18,
  },
});

//function 
export default function App() {
  const [tasks, setTasks] = useState([
    { key: '1', title: 'Go grocery shoppping', completed: false },
    { key: '2', title: 'Feed Dog', completed: false },
    { key: '3', title: 'Water Plants', completed: false },
  ]);


  const toggleCheckBox = (key) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.key === key ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.taskContainer}>
        <CheckBox
          checked={item.completed}
          onPress={() => toggleCheckBox(item.key)}
        />
        <Text
          style={[
            styles.taskText,
            item.completed && {
              textDecorationLine: 'line-through', 
              textDecorationStyle: 'solid',
            },
          ]}
        >
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </SafeAreaView>
  );
}
