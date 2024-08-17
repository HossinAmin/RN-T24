import { Slot } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Layout() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Cart Layout</Text>
      <Slot />
    </View>
  );
}
