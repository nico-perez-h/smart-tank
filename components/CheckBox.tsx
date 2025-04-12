// components/CheckBox.tsx
import React from "react";
import { Pressable, View, Text } from "react-native";
import { CheckIcon } from "./Icons";

interface CheckBoxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  label?: string;
  className?: string;
  color?: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  checked,
  onChange,
  label,
  className = "",
  color = "#348ac7",
}) => {
  return (
    <Pressable
      onPress={() => onChange(!checked)}
      className={`flex-row items-center gap-2 ${className}`}
    >
      <View
        className={`w-5 h-5 rounded-full border-2 items-center justify-center`}
        style={{
          borderColor: color,
          backgroundColor: checked ? color : "white",
        }}
      >
        {checked && <CheckIcon size={12} color="white" />}
      </View>
      {label && <Text className="text-black text-lg">{label}</Text>}
    </Pressable>
  );
};

export default CheckBox;
