import { Pressable, Text, PressableProps } from "react-native";
import React from "react";

type ButtonProps = {
  title: string;
  variant?: "filled" | "outline";
  className?: string;
} & PressableProps;

const Button = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  ButtonProps
>(({ title, variant = "filled", className = "", ...props }, ref) => {
  const baseStyle = "py-3 rounded-xl";
  const filledStyle = "bg-[#9CD5FF]";
  const outlineStyle = "bg-white border border-[#9CD5FF]";

  const textBase = "text-center text-lg font-semibold";
  const textColorFilled = "text-white";
  const textColorOutline = "text-[#9CD5FF]";

  return (
    <Pressable
      ref={ref}
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
});

// Evita warnings en devtools
Button.displayName = "Button";

export default Button;
