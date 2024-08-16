import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import AddTaskModal from "@/components/AddTaskModal";
import TasksList from "@/components/tasks/list";
import PrimaryButton from "@/components/common/primaryButton";

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
        <PrimaryButton title="Add Task" onClick={() => setShowModal(true)} />
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
