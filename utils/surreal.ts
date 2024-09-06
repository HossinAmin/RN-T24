import { Surreal } from "surrealdb.js";

export const db = new Surreal();

export default function useSurreal() {
  const initDb = async () => {
    try {
      await db.connect(process.env.EXPO_PUBLIC_SURREAL_API_URL as string);
      await db.use({
        namespace: process.env.EXPO_PUBLIC_SURREAL_NAMESPACE,
        database: process.env.EXPO_PUBLIC_SURREAL_DATABASE,
      });
      console.log("Connected to SurrealDB");
    } catch (error) {
      console.error("Failed to connect to SurrealDB:", error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const loginUser = await db.signin({
        identifier: email,
        password,
        scope: "users_auth",
      });

      return loginUser;
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  return { initDb, login };
}
