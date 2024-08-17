import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";

import { View, Text, Image, ActivityIndicator, Button } from "react-native";
import { Product } from "@/types/products";
import { Navbar } from "@/components/Navbar";

export default function SingleProduct() {
  const [product, setProduct] = useState<Product>();
  const { id: product_id } = useLocalSearchParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${product_id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <View className="flex-1 justify-center">
      {product ? (
        <>
          <Image
            src={product.thumbnail}
            className="w-full aspect-square h-96"
          />
          <View>
            <Text className="text-xl font-bold mb-2">{product.title}</Text>
            <Text className="text-gray-700 mb-2">{product.description}</Text>
            <Text className="text-lg font-semibold mb-2">${product.price}</Text>
            <Text className="text-gray-500 mb-2">
              Shipping: {product.shippingInformation}
            </Text>
            <Text className="text-gray-500 mb-2">
              Warranty: {product.warrantyInformation}
            </Text>
            <Text className="text-gray-500 mb-2">Brand: {product.brand}</Text>
            <Button
              title="add to cart"
              onPress={() => router.navigate("/login")}
            ></Button>
          </View>
        </>
      ) : (
        <ActivityIndicator size={50} />
      )}
    </View>
  );
}
