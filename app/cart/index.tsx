import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

// Import or define your Product type here
import { Product } from "@/types/products";
import { Link } from "expo-router";
import { paths } from "@/constants/paths";
import useUserStore from "@/store/user";
import CartCard from "@/components/CartCard";
import useCartStore from "@/store/cart";
// Define a new type for cart items
type CartItem = Product & { quantity: number };

export default function CartPage() {
  const { user } = useUserStore();
  const { cart, removeFromCart } = useCartStore();

  const calculateTotal = () => {
    return cart?.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleCheckout = () => {
    Alert.alert("Checkout", "Proceeding to checkout...");
  };

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">Your Cart</Text>
      {cart && cart.length > 0 ? (
        <>
          <FlatList
            data={cart}
            renderItem={(i) => (
              <CartCard
                item={i.item}
                onRemove={() => removeFromCart(i.item.id.toString())}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            className="mb-4"
          />
          <View className="bg-white p-4 rounded-lg shadow mb-4">
            <Text className="text-lg font-semibold">
              Total: ${calculateTotal()}
            </Text>
          </View>
          <Link
            onPress={handleCheckout}
            className="bg-blue-500 rounded-lg py-3 px-6"
            href={user ? paths.checkout : paths.login}
          >
            <Text className="text-white text-center font-semibold text-lg">
              Proceed to Checkout
            </Text>
          </Link>
        </>
      ) : (
        <Text className="text-lg text-center">Your cart is empty</Text>
      )}
    </View>
  );
}
