import { paths } from "@/constants/paths";
import useUserStore from "@/store/user";
import { router, Stack, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";

import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  const { user } = useUserStore();

  const pathName = usePathname();

  useEffect(() => {
    if (!user) {
      router.navigate(paths.login);
    } else {
      if (pathName === paths.login) {
        router.navigate("/");
      }
    }
  }, [user]);

  return (
    <SafeAreaView className="flex-1">
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            paddingTop: 20,
          },
        }}
      />
    </SafeAreaView>
  );
}
