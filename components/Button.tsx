import { Pressable, Text, PressableProps } from "react-native";
import React from "react";

type ButtonProps = {
  title: string; // El texto que va dentro del botón
  variant?: "filled" | "outline"; // El tipo de estilo
  className?: string; // Para agregar estilos personalizados si quieres
} & PressableProps; // Hereda todas las props de un <Pressable />

const Button = ({
  title,
  variant = "filled",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyle = "py-3 rounded-xl";
  const filledStyle = "bg-[#9CD5FF]";
  const outlineStyle = "bg-white border border-[#9CD5FF]";

  const textBase = "text-center text-lg font-semibold";
  const textColorFilled = "text-white";
  const textColorOutline = "text-[#9CD5FF]";

  return (
    <Pressable
      className={`${baseStyle} ${
        variant === "filled" ? filledStyle : outlineStyle
      } ${className}`}
      {...props}
    >
      <Text
        className={`${textBase} ${
          variant === "filled" ? textColorFilled : textColorOutline
        }`}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
