import Feather from "@expo/vector-icons/Feather";
import React from "react";

// Tipamos props, quitando "name" para que no se pueda sobreescribir
type IconProps = Omit<React.ComponentProps<typeof Feather>, "name">;

export const MailIcon = (props: IconProps) => (
  <Feather name="mail" size={24} color="black" {...props} />
);

export const UserIcon = (props: IconProps) => (
  <Feather name="user" size={24} color="black" {...props} />
);

export const LockIcon = (props: IconProps) => (
  <Feather name="lock" size={24} color="black" {...props} />
);

export const LoginIcon = (props: IconProps) => (
  <Feather name="log-in" size={24} color="black" {...props} />
);

export const EyeIcon = (props: IconProps) => (
  <Feather name="eye" size={24} color="black" {...props} />
);

export const EyeOffIcon = (props: IconProps) => (
  <Feather name="eye-off" size={24} color="black" {...props} />
);

export const HomeIcon = (props: IconProps) => (
  <Feather name="home" size={24} color="black" {...props} />
);

export const CheckIcon = (props: IconProps) => (
  <Feather name="check" size={24} color="black" {...props} />
);
