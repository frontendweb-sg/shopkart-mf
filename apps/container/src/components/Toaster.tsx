import { memo } from "react";
import { toast } from "react-toastify";

type Props = {
  variant?: "success" | "error" | "warning" | "info";
  message: string;
};

const Toaster = ({ variant = "success", message }: Props) => {
  return toast[variant](message);
};

export default memo(Toaster);
