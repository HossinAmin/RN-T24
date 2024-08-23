import ProductCard from "@/components/ProductCard";
import { ScrollView, Pressable, View, Platform } from "react-native";
import { useEffect, useState } from "react";
import { Product, ProductsResponse } from "@/types/products";
import { Link, router } from "expo-router";
import { paths } from "@/constants/paths";
import useProducts from "@/hooks/useProducts";

export default function App() {
  const { products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View>
      <ScrollView>
        {products?.map((product) => (
          <Pressable
            className="my-4"
            key={product.id}
            onPress={() =>
              router.navigate(paths.product(product.id.toString()))
            }
          >
            <ProductCard product={product} />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
