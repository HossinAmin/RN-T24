import React, { useState } from "react";
import { View, Text, SafeAreaView, Pressable, Button } from "react-native";
import AddTaskModal from "@/components/AddTaskModal";
import TasksList from "@/components/tasks/list";

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
        <Pressable
          className="bg-blue-500  rounded-lg p-2"
          onPress={() => setShowModal(true)}
        >
          <Text className="text-white"> Add Task</Text>
        </Pressable>
      </View>

      <TasksList tasks={tasks} deleteTask={handleDeleteTask} />

      <AddTaskModal
        showModal={showModal}
        setShowModal={setShowModal}
        addTask={addTask}
      />
    </SafeAreaView>
  );
}
