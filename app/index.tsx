import { paths } from "@/constants/paths";
import { Redirect } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return <Redirect href={paths.products} />;
}
