import React from "react";
import { Text, ScrollView } from "react-native";
import TaskItem from "./item";

type TasksProps = {
  tasks: string[];
  deleteTask: (index: number) => void;
};

export default function TasksList({ tasks, deleteTask }: TasksProps) {
  const handleDeleteTask = (index: number) => {
    deleteTask(index);
  };
  return (
    <ScrollView className="w-full">
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            deleteTask={() => handleDeleteTask(index)}
          />
        ))
      ) : (
        <Text className="text-center p-20 text-2xl">No tasks</Text>
      )}
    </ScrollView>
  );
}
