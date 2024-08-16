import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import AddTaskModal from "@/components/AddTaskModal";
import Task from "@/components/Task";

export default function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(false);

  const addTask = (task: string) => {
    setTasks((preTasks) => [...preTasks, task]);
  };

  const handleDeleteTask = (index: number) => {
    setTasks((preTasks) => preTasks.filter((_, i) => i !== index));
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row py-4 px-6 justify-between items-center">
        <Text className="text-4xl">Tasks</Text>
        <Pressable className="bg-blue-500  rounded-lg p-1">
          <Button
            title="Add Task"
            color="#ffffff"
            onPress={() => setShowModal(true)}
          />
        </Pressable>
      </View>
      <ScrollView className="w-full">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              deleteTask={() => handleDeleteTask(index)}
            />
          ))
        ) : (
          <Text className="text-center p-20 text-2xl">No tasks</Text>
        )}
      </ScrollView>

      <AddTaskModal
        showModal={showModal}
        setShowModal={setShowModal}
        addTask={addTask}
      />
    </SafeAreaView>
  );
}
