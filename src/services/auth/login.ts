import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@config/firebaseConfig";

export const loginUser = async (email: string, password: string) => {
  // Validaciones
  if (!email) {
    const error = new Error("Por favor ingresa tu correo.");
    (error as any).field = "email";
    throw error;
  }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    const error = new Error("El correo electrónico no es válido.");
    (error as any).field = "email";
    throw error;
  }

  if (!password) {
    const error = new Error("Por favor ingresa tu contraseña.");
    (error as any).field = "password";
    throw error;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return { user: userCredential.user };
  } catch (error: any) {
    let errorMessage = "No se pudo iniciar sesión.";
    if (error.code === "auth/user-not-found") {
      errorMessage = "No encontramos una cuenta con ese correo.";
    } else if (error.code === "auth/wrong-password") {
      errorMessage = "La contraseña es incorrecta.";
    } else if (error.code === "auth/invalid-credential") {
      errorMessage = "Correo o contraseña inválidos.";
    }

    const customError = new Error(errorMessage);
    throw customError;
  }
};
