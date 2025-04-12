import { Pressable, Text, View } from "react-native";
import { useState } from "react";
import { MailIcon, LockIcon, EyeIcon } from "@components/Icons";
import Button from "@components/Button";
import { Link } from "expo-router";
import Input from "@components/Input";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondpassword, setSecondPassword] = useState("");

  return (
    <View className="flex-1 bg-white px-6 justify-between pb-8">
      {/* Título centrado con color más oscuro */}
      <View className="items-center mt-12">
        <Text className="text-4xl font-bold text-[#348ac7]">Regístrate</Text>
      </View>

      {/* Inputs */}
      <View className="gap-5 mt-10">
        {/* Email */}
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
          iconRight={<EyeIcon color="#9CD5FF" />}
          value={password}
          onChangeText={setPassword}
          placeholder="Contraseña"
          placeholderTextColor="#7B8D93"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          autoComplete="password"
          borderColor="#348ac7"
        />
        <Input
          iconLeft={<LockIcon color="#9CD5FF" />}
          iconRight={<EyeIcon color="#9CD5FF" />}
          value={secondpassword}
          onChangeText={setSecondPassword}
          placeholder="Confirmar contraseña"
          placeholderTextColor="#7B8D93"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          autoComplete="password"
          borderColor="#348ac7"
        />
      </View>

      {/* Botón más corto */}
      <View className="items-center mt-10">
        <Button
          title="Registrarse"
          variant="filled"
          className="w-[60%] self-center"
        />
      </View>

      {/* Texto inferior */}
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
