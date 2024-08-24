import React, { useEffect } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { router } from "expo-router";
import { useLogin } from "@/store/useLogin";

export default function App() {
  const { email, password, setEmail, setPassword, storeToken, getToken } =
    useLogin();

  const handleLogin = () => {
    console.log("Login attempted with:", { email, password });
    storeToken("token", password);
    router.push("/home");
  };

  const closeKeyboard = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    getToken("token").then((token) => {
      if (token) {
        router.push("/home");
      }
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={closeKeyboard}>
      <SafeAreaView className="flex-1 justify-center items-center bg-white">
        <Text className="text-2xl font-bold mb-5 text-[#3b82f6]">Login</Text>
        <TextInput
          className="w-10/12 h-10 border border-[#3b82f6] rounded-md mb-4 px-2"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor={"#737373"}
        />
        <TextInput
          className="w-10/12 h-10 border border-[#3b82f6] rounded-md mb-4 px-2"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor={"#737373"}
        />
        <TouchableOpacity
          className="bg-[#3b82f6] p-2.5 w-6/12 rounded-md mt-5 items-center"
          onPress={handleLogin}
        >
          <Text className="text-white text-base font-bold">Log In</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
