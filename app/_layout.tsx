import { Text, View } from "react-native";
import "../global.css";
import Index from "./index";
export default function Layout() {
  return (
    <View className="flex-1 bg-blue-100 justify-center items-center">
      <Text className="text- font-extrabold ">Hola</Text>
      <Index />
    </View>
  );
}
