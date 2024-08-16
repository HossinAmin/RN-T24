import React, { useState } from "react";
import { View, Text, Pressable, Modal, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/MaterialIcons";

type ModalProps = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  addTask: (task: string) => void;
};

export default function App({ showModal, setShowModal, addTask }: ModalProps) {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    addTask(newTask);
    setNewTask("");
    setShowModal(!showModal);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={() => setShowModal(!showModal)}
    >
      <View className="flex-1 justify-center items-center bg-white/50">
        <View className="bg-gray-400 rounded-xl p-4 items-center w-3/4 h-1/4">
          <View className="flex-row items-center justify-between w-full pb-4">
            <Text className="text-2xl ">Add Task</Text>
            <Pressable onPress={() => setShowModal(false)}>
              <Ionicons name="close" size={32} color={"#f5f5f5"} />
            </Pressable>
          </View>
          <TextInput
            className="border-2 border-white m-4 rounded-lg py-2 w-full"
            value={newTask}
            onChangeText={setNewTask}
          />
          <Pressable
            className="mt-4 py-2 px-6 bg-blue-500 rounded-lg"
            disabled={newTask === ""}
            style={{ opacity: newTask === "" ? 0.5 : 1 }}
            onPress={handleAddTask}
          >
            <Text className="text-lg text-white">Add</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
