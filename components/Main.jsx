import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import "../global.css";

export default function Main() {
  return (
    <View className="bg-yellow-400 justify-center items-center">
      <Text className="text-blue-500 text-5xl font-bold">Componentes</Text>
      <StatusBar style="auto" />
    </View>
  );
}
