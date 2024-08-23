import { Navbar } from "@/components/Navbar";
import { Tabs } from "expo-router";
import React from "react";
import Icon from "@expo/vector-icons/AntDesign";

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
          tabBarIcon: ({ focused }) => (
            <Icon
              name="profile"
              size={20}
              color={focused ? "rgb(0,122,255)" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="products/index"
        options={{
          title: "shop",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="shoppingcart"
              size={20}
              color={focused ? "rgb(0,122,255)" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "settings",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="setting"
              size={20}
              color={focused ? "rgb(0,122,255)" : "black"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="products/[id]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
