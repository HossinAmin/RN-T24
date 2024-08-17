import ProductCard from "@/components/ProductCard";
import { ScrollView, Pressable, View, Platform } from "react-native";
import { useEffect, useState } from "react";
import { Product, ProductsResponse } from "@/types/products";
import { Link, router } from "expo-router";
import { paths } from "@/constants/paths";

export default function App() {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data: ProductsResponse) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <View>
      <ScrollView>
        {products?.map((product) => (
          <Pressable
            className="my-4"
            key={product.id}
            onPress={() => router.navigate(`${paths.products}${product.id}`)}
          >
            <ProductCard product={product} />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}
