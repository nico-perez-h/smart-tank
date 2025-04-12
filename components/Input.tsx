import { TextInput, TextInputProps, View } from "react-native";
import React from "react";

type InputProps = {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  inputClassName?: string;
  placeholderTextColor?: string;
  borderColor?: string;
} & TextInputProps;

const Input = ({
  iconLeft,
  iconRight,
  className = "",
  inputClassName = "",
  placeholderTextColor = "#888",
  borderColor = "#348ac7",
  ...props
}: InputProps) => {
  return (
    <View
      className={`flex-row items-center rounded-xl px-4 py-3 bg-white border ${className}`}
      style={{ borderColor }}
    >
      {iconLeft && <View className="mr-2">{iconLeft}</View>}
      <TextInput
        className={`flex-1 text-base text-black ${inputClassName}`}
        placeholderTextColor={placeholderTextColor}
        {...props}
      />
      {iconRight && <View className="ml-2">{iconRight}</View>}
    </View>
  );
};

export default Input;
