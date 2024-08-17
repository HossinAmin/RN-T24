import { Navbar } from "@/components/Navbar";
import { Link, Stack } from "expo-router";
import React from "react";
import { View } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import { paths } from "@/constants/paths";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { margin: 32 },
        header: () => <Navbar />,
      }}
    >
      {/* Optionally configure static options outside the route.*/}
      <Stack.Screen
        name="[id]"
        options={{
          header: () => (
            <View className="p-4 bg-white ">
              <Link href={paths.products}>
                <Icon name="arrowleft" size={32} />
              </Link>
            </View>
          ),
        }}
      />
    </Stack>
  );
}
