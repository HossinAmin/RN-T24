import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { useLoginStore } from "@/store/useLoginStore";
import useSurreal from "@/hooks/useSurreal";
import Login from "./login";
import Home from "./home";

export default function App() {
  const { initDb } = useSurreal();
  const { token } = useLoginStore();

  useEffect(() => {
    initDb();
  }, []);

  return (
    <SafeAreaView className="flex-1">
      {token ? <Home /> : <Login />}
    </SafeAreaView>
  );
}
