import React from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useAuthStore } from "../store/useAuthStore";
import useSurreal from "../utils/surreal";

export default function Login() {
  const { email, setEmail, password, setPassword, setToken } = useAuthStore();
  const router = useRouter();
  const { login } = useSurreal();

  const handleLogin = async () => {
    try {
      const loginUser = await login(email, password);

      if (loginUser) {
        setToken(loginUser);
        router.push("/todo");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <View className="flex-1 justify-center w-full items-center gap-y-2 bg-gray-900 p-4">
      <Text className="text-3xl text-white mb-4">Login</Text>
      <TextInput
        placeholder="user"
        value={email}
        onChangeText={setEmail}
        className="p-2 mb-4 w-full text-white border-solid border-2 border-blue-500 rounded-lg"
        placeholderTextColor="#888"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="p-2 mb-4 w-full text-white border-solid border-2 border-blue-500 rounded-lg"
        placeholderTextColor="#888"
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
