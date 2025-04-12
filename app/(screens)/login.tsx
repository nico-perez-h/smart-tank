import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import Input from "@components/Input";
import Button from "@components/Button";
import { MailIcon, LockIcon, EyeIcon } from "@components/Icons";
import { Link } from "expo-router";
import CheckBox from "@components/CheckBox";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isChecked, setChecked] = React.useState(false);

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
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
            </View>

            <View className="items-center justify-center">
              <CheckBox
                checked={isChecked}
                onChange={setChecked}
                label="Mantener sesión iniciada"
                className="py-6"
                color="#348ac7"
              />
            </View>

            {/* Botón */}
            <View className="items-center ">
              <Button
                title="Ingresar"
                variant="filled"
                className="w-[60%] self-center"
              />
            </View>

            {/* Texto inferior */}
            <Link href="/register" asChild>
              <Text className="text-base text-gray-600 ml-1 mt-6 ">
                ¿No tienes cuenta?{" "}
                <Text className="text-[#9CD5FF] font-semibold">Regístrate</Text>
              </Text>
            </Link>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
