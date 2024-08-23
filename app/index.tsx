import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useRouter } from "expo-router";
import { useAuthStore } from "../store/useAuthStore";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const { setToken } = useAuthStore();

  const handleLogin = async () => {
    if (username === "user" && password === "password") {
      const userToken = "exampleToken123";
      await setToken(userToken);
      router.push("/todo");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <View className="flex-1 justify-center items-center gap-y-2 bg-gray-900 p-4">
      <Text className="text-3xl text-white mb-4">Login</Text>
      <TextInput
        placeholder="user"
        value={username}
        onChangeText={setUsername}
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
