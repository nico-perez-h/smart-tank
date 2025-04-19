import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@config/firebaseConfig";

export const registerUser = async (
  email: string,
  password: string,
  secondPassword: string,
) => {
  // Validaciones
  if (!email || !password || !secondPassword) {
    throw { field: "general", message: "Por favor completa todos los campos." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw { field: "email", message: "El correo electrónico no es válido." };
  }

  if (password !== secondPassword) {
    throw { field: "secondPassword", message: "Las contraseñas no coinciden." };
  }

  if (password.length < 6) {
    throw {
      field: "password",
      message: "La contraseña debe tener al menos 6 caracteres.",
    };
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return { user: userCredential.user };
  } catch (error: any) {
    if (error.code === "auth/email-already-in-use") {
      throw { field: "email", message: "Este correo ya está registrado." };
    } else if (error.code === "auth/invalid-email") {
      throw { field: "email", message: "El correo electrónico no es válido." };
    } else if (error.code === "auth/weak-password") {
      throw { field: "password", message: "La contraseña es demasiado débil." };
    }

    throw {
      field: "general",
      message: "No se pudo crear la cuenta. Intenta nuevamente.",
    };
  }
};
