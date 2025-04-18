import { Pressable, Text, View, Alert } from "react-native";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { MailIcon, LockIcon, EyeIcon, EyeOffIcon } from "@components/Icons";
import Button from "@components/Button";
import Input from "components/Input";
import CheckBox from "@components/CheckBox";
import { registerUser } from "@services/auth/register";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  // Nuevos estados para ver/ocultar contraseñas
  const [showPassword, setShowPassword] = useState(false);
  const [showSecondPassword, setShowSecondPassword] = useState(false);

  const router = useRouter();

  const handleRegister = async () => {
    try {
      await registerUser(email, password, secondPassword);
      Alert.alert("Éxito", "Cuenta creada correctamente", [
        {
          text: "OK",
          onPress: () => router.push("/login"),
        },
      ]);
    } catch (error: any) {
      Alert.alert("Error", error.message);
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
      </View>

      <View className="items-center mt-10">
        <Button
          title="Registrarse"
          variant="filled"
          className="w-[60%] self-center"
          onPress={handleRegister}
        />
      </View>

      <View className="items-center justify-center">
        <CheckBox
          checked={keepLoggedIn}
          onChange={setKeepLoggedIn}
          label="Mantener sesión iniciada"
          className="py-6"
          color="#348ac7"
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
