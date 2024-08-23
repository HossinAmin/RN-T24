import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type CheckboxProps = {
  isChecked: boolean;
  onToggle: () => void;
};

export default function Checkbox({ isChecked, onToggle }: CheckboxProps) {
  return (
    <TouchableOpacity onPress={onToggle} className="flex-row items-center">
      <Ionicons
        name={isChecked ? "checkbox-outline" : "square-outline"}
        size={24}
        color={isChecked ? "black" : "gray"}
      />
    </TouchableOpacity>
  );
}
