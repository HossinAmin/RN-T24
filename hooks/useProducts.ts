import { Product, ProductsResponse } from "@/types/products";
import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>();
  const [product, setProduct] = useState<Product>();

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data: ProductsResponse = await res.json();

    setProducts(data.products);
  };

  const fetchProduct = async (id: string) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data: ProductsResponse = await res.json();

    setProduct(data);
  };

  return {
    product,
    products,
    fetchProduct,
    fetchProducts,
  };
}
