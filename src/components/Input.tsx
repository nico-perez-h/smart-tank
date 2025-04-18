import { TextInput, TextInputProps, View, Pressable } from "react-native";
import React from "react";

type InputProps = {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onIconRightPress?: () => void;
  className?: string;
  inputClassName?: string;
  placeholderTextColor?: string; // color del placeholder
  borderColor?: string; // color del borde
} & TextInputProps;

const Input = ({
  iconLeft,
  iconRight,
  onIconRightPress,
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
      {iconRight && (
        <View className="ml-2">
          {onIconRightPress ? (
            <Pressable onPress={onIconRightPress}>{iconRight}</Pressable>
          ) : (
            iconRight
          )}
        </View>
      )}
    </View>
  );
};

export default Input;
