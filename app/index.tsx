import React, { useEffect } from "react";
import { View } from "react-native";
import { useAuthStore } from "../store/useAuthStore";
import useSurreal from "../utils/surreal";
import Todo from "./todo";
import Login from "./login";

export default function App() {
  const { token } = useAuthStore();
  const { initDb } = useSurreal();

  useEffect(() => {
    initDb();
  }, []);

  return (
    <View className="flex-1 justify-center items-center w-full bg-gray-900 p-4">
      {token ? <Todo /> : <Login />}
    </View>
  );
}
