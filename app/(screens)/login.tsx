import { View, Text } from "react-native";
import React from "react";
import Input from "@components/Input";
import Button from "@components/Button";
import { MailIcon, LockIcon, EyeIcon } from "@components/Icons";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View>
      <View>
        <Text>Inicio de sesion</Text>
      </View>
      <View>
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
      </View>

      <View className="items-center mt-10">
        <Button
          title="Registrarse"
          variant="filled"
          className="w-[60%] self-center"
        />
      </View>
    </View>
  );
};

export default Login;
