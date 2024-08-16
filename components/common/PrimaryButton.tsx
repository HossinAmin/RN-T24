import React from "react";
import { Button, Pressable } from "react-native";

type ButtonProps = {
  title: string;
  onClick: () => void;
};

export default function PrimaryButton({ title, onClick }: ButtonProps) {
  return (
    <Pressable className="bg-blue-500  rounded-lg p-1">
      <Button title={title} color="#ffffff" onPress={() => onClick} />
    </Pressable>
  );
}
