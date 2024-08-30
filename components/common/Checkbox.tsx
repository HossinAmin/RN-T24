import React, { useState } from "react";
import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/MaterialIcons";

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Pressable onPress={handleCheckboxChange}>
      {isChecked ? (
        <Ionicons name="check-box" size={32} />
      ) : (
        <Ionicons name="check-box-outline-blank" size={32} />
      )}
    </Pressable>
  );
}
