import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/MaterialIcons";
import Checkbox from "./common/Checkbox";

type TaskProps = {
  task: string;
  deleteTask: () => void;
};

export default function Task({ task, deleteTask }: TaskProps) {
  const handleDeleteTask = () => {
    deleteTask();
  };

  return (
    <View className="flex-row items-center justify-between p-4 bg-gray-300 m-4 rounded-2xl">
      <View className="flex-row">
        <Checkbox />
        <Text className="text-2xl ml-2">{task}</Text>
      </View>
      <Pressable onPress={handleDeleteTask}>
        <Ionicons name="delete-outline" size={32} color={"red"} />
      </Pressable>
    </View>
  );
}
