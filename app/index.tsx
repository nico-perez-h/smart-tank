import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

import Button from "@components/Button";

const index = () => {
  return (
    <View className="flex-1 bg-white relative">
      <View className="mt-[150px] px-[30px] space-y-5">
        <Text className="text-5xl font-bold ml-2 text-black">Smart Tank</Text>
        <Text className="text-lg font-semibold text-black ml-2">
          Bienvenido a Smart Tank
        </Text>
        <Text className="text-base text-gray-600 ml-2">
          Smart Storage & Living Ecosystem
        </Text>
      </View>

      {/* Contenedor de botones - un poco abajo del centro */}
      <View className="absolute bottom-[180px] w-full px-6">
        <Link href="/login" asChild className="mb-[20px]">
          <Button title="Iniciar sesion" variant="filled" />
        </Link>

        <Link href="/register" asChild>
          <Button title="Registrase" variant="outline" />
        </Link>
      </View>
    </View>
  );
};

export default index;
