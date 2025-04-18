import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@config/configFirebase";

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return { user: userCredential.user };
  } catch (error: any) {
    console.error("Error al iniciar sesión:", error.message);
    throw error;
  }
};
