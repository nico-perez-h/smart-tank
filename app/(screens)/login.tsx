import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useRouter, Link } from "expo-router";
import { MailIcon, LockIcon, EyeIcon, EyeOffIcon } from "@components/Icons";
import Input from "@components/Input";
import Button from "@components/Button";
import { loginUser } from "@services/auth/login";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [generalError, setGeneralError] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    setEmailError("");
    setPasswordError("");
    setGeneralError("");

    try {
      setIsLoading(true);
      await loginUser(email, password);
      router.replace("/home");
    } catch (error: any) {
      if (error.field === "email") {
        setEmailError(error.message);
      } else if (error.field === "password") {
        setPasswordError(error.message);
      } else {
        let message = "No se pudo iniciar sesión.";
        if (error.message) {
          message = error.message;
        }
        setGeneralError(message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white px-6 justify-between pb-8">
      {/* Título */}
      <View className="items-center mt-12">
        <Text className="text-4xl font-bold text-[#348ac7]">
          Iniciar sesión
        </Text>
      </View>

      {/* Inputs */}
      <View className="gap-5 mt-32">
        <Input
          iconLeft={<MailIcon color="#9CD5FF" />}
          value={email}
          onChangeText={setEmail}
          placeholder="email@example.com"
          placeholderTextColor="#7B8D93"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          autoFocus
          borderColor="#348ac7"
        />
        {emailError ? (
          <Text className="text-red-500 text-sm">{emailError}</Text>
        ) : null}

        <Input
          iconLeft={<LockIcon color="#9CD5FF" />}
          iconRight={
            showPassword ? (
              <EyeOffIcon color="#9CD5FF" />
            ) : (
              <EyeIcon color="#9CD5FF" />
            )
          }
          onIconRightPress={() => setShowPassword(!showPassword)}
          value={password}
          onChangeText={setPassword}
          placeholder="Contraseña"
          placeholderTextColor="#7B8D93"
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          autoComplete="password"
          borderColor="#348ac7"
        />
        {passwordError ? (
          <Text className="text-red-500 text-sm">{passwordError}</Text>
        ) : null}
      </View>

      {/* Cargando */}
      {isLoading && (
        <View className="items-center mt-4">
          <ActivityIndicator size="small" color="#348ac7" />
          <Text className="text-sm text-gray-500 mt-2">
            Verificando credenciales...
          </Text>
        </View>
      )}

      {/* Error general */}
      {!isLoading && generalError ? (
        <Text className="text-red-500 text-center mt-4">{generalError}</Text>
      ) : null}

      {/* Botón */}
      <View className="items-center mt-10">
        <Button
          title="Ingresar"
          variant="filled"
          className="w-[60%] self-center"
          onPress={handleLogin}
          disabled={isLoading}
        />
      </View>

      {/* Registro */}
      <Link href="/register" asChild>
        <Text className="text-base text-gray-600 ml-1 mt-6 text-left">
          ¿No tienes cuenta?{" "}
          <Text className="text-[#9CD5FF] font-semibold">Regístrate</Text>
        </Text>
      </Link>
    </View>
  );
};

export default Login;
