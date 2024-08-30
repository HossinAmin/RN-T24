import React, { useEffect } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  SafeAreaView,
} from "react-native";
import { router } from "expo-router";
import { useLogin } from "@/store/useLogin";
import useSurreal from "@/hooks/useSurreal";

export default function App() {
  const { initDb, login } = useSurreal();
  const { email, password, setEmail, setPassword, storeToken, getToken } =
    useLogin();

  const handleLogin = async () => {
    console.log("Login attempted with:", { email, password });
    const token = await login(email, password);
    if (token) {
      storeToken("auth_token", token);
      router.push("/home");
    }
  };

  const closeKeyboard = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    initDb();
    getToken("auth_token").then((token) => {
      if (token === "alo") {
        router.push("/home");
      }
    });
  }, []);

  return (
    <SafeAreaView className="flex-1">
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
    </SafeAreaView>
  );
}
