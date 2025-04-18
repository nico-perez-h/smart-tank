import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@config/configFirebase";

// Validar formato de correo electrónico
const validateEmail = (email: string): boolean => {
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
};

// Función de registro con validaciones
export const registerUser = async (
  email: string,
  password: string,
  confirmPassword: string,
): Promise<{ user: any }> => {
  if (!email || !password || !confirmPassword) {
    throw new Error("Todos los campos son obligatorios.");
  }

  if (!validateEmail(email)) {
    throw new Error("El correo electrónico no es válido.");
  }

  if (password !== confirmPassword) {
    throw new Error("Las contraseñas no coinciden.");
  }

  if (password.length < 6) {
    throw new Error("La contraseña debe tener al menos 6 caracteres.");
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
      throw new Error("El correo ya está registrado.");
    }

    if (error.code === "auth/weak-password") {
      throw new Error("La contraseña es demasiado débil.");
    }

    throw new Error("Error al registrar usuario. Inténtalo nuevamente.");
  }
};
