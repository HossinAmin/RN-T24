import React, { useState } from "react";
import { View, Text, SafeAreaView, Pressable } from "react-native";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/MaterialIcons";
import AddTaskModal from "@/components/AddTaskModal";
import TasksList from "@/components/tasks/list";

export default function Home() {
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
        <View className="flex-row items-center">
          <Link href="/">
            <Ionicons name="arrow-back" size={32} />
          </Link>
          <Text className="text-4xl ml-3">Tasks</Text>
        </View>
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
