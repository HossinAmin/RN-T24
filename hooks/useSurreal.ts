import { db } from "@/utils/surreal";

export default function useSurreal() {
  const initDb = async () => {
    // @ts-expect-error
    const isConnected = !!db.socket;
    if (isConnected) return;

    try {
      await db.connect(process.env.EXPO_PUBLIC_SURREAL_BASE_URL as string);
      await db.use({
        namespace: process.env.EXPO_PUBLIC_SURREAL_NAMESPACE,
        database: process.env.EXPO_PUBLIC_SURREAL_DATABASE,
      });
      console.log("Connected to SurrealDB");
    } catch (err) {
      console.error("Failed to connect to SurrealDB:", err);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const token = await db.signin({
        scope: "members",
        email,
        password,
      });
      console.log("Logged in with token:", token);

      return token;
    } catch (err) {
      console.error("Failed to login:", err);
    }
  };

  return { initDb, login };
}
