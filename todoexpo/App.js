import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, Platform, View, Button, TextInput } from 'react-native';
import { CheckBox } from '@rneui/themed';
// stylesheet (similar to css)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    padding: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  taskText: {
    marginLeft: 10,
    fontSize: 18,
    padding: 20,
  },
  inputContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    flex: 1,
    marginRight: 0,
  },
  addSection: {
    flex: 1,
    marginTop: 0,
    marginBottom: 200,
  },
});
// flatlist data component - using key and
const DATA = [
  { key: '1', description: 'Go grocery shopping', completed: false },
  { key: '2', description: 'Feed the dog', completed: false },
  { key: '3', description: 'Water the plants', completed: false },
  { key: '4', description: 'RSVP to dinner', completed: false },
];
const App = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState(DATA);
  //checkbox
  const toggleCheckBox = (key) => {
    const updatedTasks = tasks.map((task) =>
      task.key === key ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  // add new task
  const addNewTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        key: (tasks.length + 1).toString(),
        description: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };
  //checkbox and adding
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <CheckBox
              checked={item.completed}
              onPress={() => toggleCheckBox(item.key)}/>
            <Text
              style={[styles.taskText,item.completed && { textDecorationLine: 'line-through', textDecorationStyle: 'solid',},
              ]}>
              {item.description}
            </Text>
          </View>
        )}keyExtractor={(item) => item.key}/>

      <View style={styles.addSection}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Add New To-Do Task"
            value={newTask}
            onChangeText={(text) => setNewTask(text)}
            style={styles.input}
          />
          <Button title="Add" onPress={addNewTask} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
