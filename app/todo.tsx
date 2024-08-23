import React, { useState } from "react";
import { View, Text, TextInput, Button, Modal, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Checkbox from "../components/checkBox";
import { useAuthStore } from "../store/useAuthStore";
import { useRouter } from "expo-router";

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

export default function TodoApp() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [todoValue, setTodoValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const { clearToken } = useAuthStore();
  const router = useRouter();

  const handleLogout = async () => {
    await clearToken();
    router.push("/");
  };

  const handleAddTodo = (): void => {
    if (todoValue.trim()) {
      const newTodo: Todo = {
        id: Math.random() * 10000 * 66756,
        text: todoValue,
        isChecked: false,
      };
      setTodos([...todos, newTodo]);
      setTodoValue("");
      setModalVisible(false);
    }
  };

  const handleDeleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCheckTodo = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  return (
    <View className="flex-1 p-4 gap-y-4 justify-center items-end bg-gray-900">
      <View className="flex-row items-center justify-start w-full">
        <Button title="Logout" onPress={handleLogout} />
      </View>

      <Text className="text-3xl text-white">To-do List</Text>
      <Ionicons
        name="add"
        size={32}
        color="white"
        onPress={() => setModalVisible(true)}
      />

      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="w-full p-4 bg-gray-800 rounded-lg">
            <TextInput
              placeholder="Enter your to-do"
              value={todoValue}
              onChangeText={setTodoValue}
              className="p-2 mb-4 text-white border-solid border-2 border-blue-500 rounded-lg"
            />
            <Button title="Add" onPress={handleAddTodo} />
          </View>
        </View>
      </Modal>

      {todos.map((todo) => (
        <View
          key={todo.id}
          className="flex-row w-full bg-gray-300 items-center gap-x-2 bg-red rounded-lg p-4 mt-2"
        >
          <Checkbox
            isChecked={todo.isChecked}
            onToggle={() => handleCheckTodo(todo.id)}
          />
          <Text className="flex-1 items-center text-black text-xl">
            {todo.text}
          </Text>
          {todo.isChecked && (
            <Pressable onPress={() => handleDeleteTodo(todo.id)}>
              <Ionicons name="trash-outline" size={23} color="red" />
            </Pressable>
          )}
        </View>
      ))}
    </View>
  );
}
