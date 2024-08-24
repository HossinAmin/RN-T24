import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

// Import or define your Product type here
import { Product } from "@/types/products";

export default function CartCard({
  item,
  onRemove,
}: {
  item: Product;
  onRemove: (id: number) => void;
}) {
  return (
    <View className="bg-white p-4 mb-2 rounded-lg shadow flex-row">
      <Image
        source={{ uri: item.thumbnail }}
        className="w-20 h-20 rounded mr-4"
      />
      <View className="flex-1 justify-between">
        <View>
          <Text className="text-lg font-semibold">{item.title}</Text>
          <Text className="text-gray-600">Price: ${item.price.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          className="bg-red-500 py-2 px-4 rounded self-start mt-2"
          onPress={() => onRemove(item.id)}
        >
          <Text className="text-white font-bold">Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
