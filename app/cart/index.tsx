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

// Define a new type for cart items
type CartItem = Product & { quantity: number };

const CartItemComponent: React.FC<{
  item: CartItem;
  onRemove: (id: number) => void;
}> = ({ item, onRemove }) => (
  <View className="bg-white p-4 mb-2 rounded-lg shadow flex-row">
    <Image
      source={{ uri: item.thumbnail }}
      className="w-20 h-20 rounded mr-4"
    />
    <View className="flex-1 justify-between">
      <View>
        <Text className="text-lg font-semibold">{item.title}</Text>
        <Text className="text-gray-600">Price: ${item.price.toFixed(2)}</Text>
        <Text className="text-gray-600">Quantity: {item.quantity}</Text>
      </View>
      <TouchableOpacity
        onPress={() => onRemove(item.id)}
        className="bg-red-500 py-2 px-4 rounded self-start mt-2"
      >
        <Text className="text-white font-bold">Remove</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
      ],
      quantity: 2,
      tags: ["smartphone", "ios"],
      sku: "APPL-IPHONE9-64GB",
      weight: 0.194,
      dimensions: { width: 75.7, height: 150.9, depth: 8.3 },
      warrantyInformation: "1 year limited warranty",
      shippingInformation: "Free shipping",
      availabilityStatus: "In Stock",
      reviews: [],
      returnPolicy: "30-day return policy",
      minimumOrderQuantity: 1,
      meta: {
        createdAt: "2023-05-01T10:00:00Z",
        updatedAt: "2023-05-01T10:00:00Z",
        barcode: "123456789012",
        qrCode: "https://example.com/qr/iphone9",
      },
    },
    // Add more items as needed
  ]);

  const { user } = useUserStore();

  const removeItem = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const renderItem = ({ item }: { item: CartItem }) => (
    <CartItemComponent item={item} onRemove={removeItem} />
  );

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    Alert.alert("Checkout", "Proceeding to checkout...");
    // Implement your checkout logic here
  };

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">Your Cart</Text>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
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
};

export default CartPage;
