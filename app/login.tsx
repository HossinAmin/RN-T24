import React from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { router } from "expo-router";
import { useLoginStore } from "@/store/useLoginStore";
import useSurreal from "@/hooks/useSurreal";
import { closeKeyboard } from "@/utils/common";

export default function Login() {
  const { login } = useSurreal();
  const { email, password, setEmail, setPassword, setToken } = useLoginStore();

  const handleLogin = async () => {
    const token = await login(email, password);
    setToken(token);

    if (token) {
      router.push("/home");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={closeKeyboard}>
      <View className="h-full justify-center items-center">
        <Text className="text-2xl font-bold mb-5 text-[#3b82f6]">Login</Text>
        <TextInput
          style={{
            width: "83.33%",
            height: 40,
            borderWidth: 1,
            borderColor: "#3b82f6",
            borderRadius: 4,
            marginBottom: 8,
            paddingHorizontal: 8,
          }}
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
      </View>
    </TouchableWithoutFeedback>
  );
}
