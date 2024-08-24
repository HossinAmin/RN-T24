import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeWindStyleSheet } from "nativewind";
import useUserStore from "@/store/user";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const UserProfile = () => {
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("John Doe");

  const { logout } = useUserStore();

  const handleLogout = () => {
    /// user = null
    logout();
  };

  const handleEditName = () => {
    if (isEditing) {
      // Save the new name
      // You might want to implement an API call here to update the name on the server
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <View className="bg-white rounded-lg shadow-md p-6 mb-4">
        <Text className="text-2xl font-bold mb-4">User Profile</Text>
        <View className="flex-row items-center mb-4">
          <Text className="text-lg font-semibold mr-2">Name:</Text>
          {isEditing ? (
            <TextInput
              className="flex-1 border border-gray-300 rounded p-2"
              value={name}
              onChangeText={setName}
              autoFocus
            />
          ) : (
            <Text className="text-lg">{name}</Text>
          )}
          <TouchableOpacity onPress={handleEditName} className="ml-2">
            <Text className="text-blue-500">{isEditing ? "Save" : "Edit"}</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-lg mb-2">
          <Text className="font-semibold">Email:</Text> johndoe@example.com
        </Text>
        <Text className="text-lg mb-2">
          <Text className="font-semibold">Phone:</Text> +1 234 567 8900
        </Text>
      </View>
      <TouchableOpacity
        onPress={handleLogout}
        className="bg-red-500 rounded-lg py-3 px-6"
      >
        <Text className="text-white text-center font-semibold text-lg">
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;
