import { Navbar } from "@/components/Navbar";
import { Link, Stack, Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import { paths } from "@/constants/paths";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        header: () => <Navbar />,
      }}
    >
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: () => <Icon name="profile" size={20} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "shop",
          tabBarIcon: () => <Icon name="shoppingcart" size={20} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "settings",
          tabBarIcon: () => <Icon name="setting" size={20} />,
        }}
      />
    </Tabs>
  );
}
