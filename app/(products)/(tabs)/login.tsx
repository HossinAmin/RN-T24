import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email: string; password: string }>();

  const validateForm = () => {
    const errors = { email: "", password: "" };

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form is valid. Proceeding with login...");
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };
  console.log("rerender");

  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <View className="w-5/6 bg-white p-6 rounded-lg shadow-md">
        <Text className="text-3xl font-bold text-center mb-8 text-gray-800">
          Login
        </Text>
        <View className="mb-4">
          <Text className="text-sm font-medium text-gray-700 mb-1">Email</Text>
          <TextInput
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 bg-gray-50"
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
          />
          {errors?.email && (
            <Text className="text-red-500 text-xs mt-1">{errors.email}</Text>
          )}
        </View>

        <View className="mb-6">
          <Text className="text-sm font-medium text-gray-700 mb-1">
            Password
          </Text>
          <TextInput
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 bg-gray-50"
            autoCapitalize="none"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
          />
          {errors?.password && (
            <Text className="text-red-500 text-xs mt-1">{errors.password}</Text>
          )}
        </View>

        <TouchableOpacity
          className="bg-blue-600 rounded-md py-3 mt-4"
          onPress={handleSubmit}
        >
          <Text className="text-white text-center font-semibold">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
