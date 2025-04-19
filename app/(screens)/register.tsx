import { Pressable, Text, View, ActivityIndicator } from "react-native";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { MailIcon, LockIcon, EyeIcon, EyeOffIcon } from "@components/Icons";
import Button from "@components/Button";
import Input from "@components/Input";
import { registerUser } from "@services/auth/register";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showSecondPassword, setShowSecondPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [secondPasswordError, setSecondPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleRegister = async () => {
    setEmailError("");
    setPasswordError("");
    setSecondPasswordError("");
    setGeneralError("");

    try {
      setIsLoading(true);

      await registerUser(email, password, secondPassword);

      router.replace("/home");
    } catch (error: any) {
      if (error.field === "email") {
        setEmailError(error.message);
      } else if (error.field === "password") {
        setPasswordError(error.message);
      } else if (error.field === "secondPassword") {
        setSecondPasswordError(error.message);
      } else {
        setGeneralError(error.message || "Ocurrió un error al registrarte.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white px-6 justify-between pb-8">
      <View className="items-center mt-12">
        <Text className="text-4xl font-bold text-[#348ac7]">Regístrate</Text>
      </View>

      <View className="gap-5 mt-10">
        <Input
          iconLeft={<MailIcon color="#9CD5FF" />}
          value={email}
          onChangeText={setEmail}
          placeholder="email@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
          autoComplete="email"
          autoFocus
          placeholderTextColor="#7B8D93"
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

        <Input
          iconLeft={<LockIcon color="#9CD5FF" />}
          iconRight={
            showSecondPassword ? (
              <EyeOffIcon color="#9CD5FF" />
            ) : (
              <EyeIcon color="#9CD5FF" />
            )
          }
          onIconRightPress={() => setShowSecondPassword(!showSecondPassword)}
          value={secondPassword}
          onChangeText={setSecondPassword}
          placeholder="Confirmar contraseña"
          placeholderTextColor="#7B8D93"
          secureTextEntry={!showSecondPassword}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          autoComplete="password"
          borderColor="#348ac7"
        />
        {secondPasswordError ? (
          <Text className="text-red-500 text-sm">{secondPasswordError}</Text>
        ) : null}
      </View>

      {isLoading && (
        <View className="items-center mt-4">
          <ActivityIndicator size="small" color="#348ac7" />
          <Text className="text-sm text-gray-500 mt-2">
            Creando tu cuenta...
          </Text>
        </View>
      )}

      {!isLoading && generalError ? (
        <Text className="text-red-500 text-center mt-4">{generalError}</Text>
      ) : null}

      <View className="items-center mt-10">
        <Button
          title="Registrarse"
          variant="filled"
          className="w-[60%] self-center"
          onPress={handleRegister}
          disabled={isLoading}
        />
      </View>

      <Link href="/login" asChild>
        <Pressable>
          <Text className="text-base text-gray-600 ml-1 mt-6">
            ¿Ya tienes cuenta?{" "}
            <Text className="text-[#9CD5FF] font-semibold">Inicia sesión</Text>
          </Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default Register;
