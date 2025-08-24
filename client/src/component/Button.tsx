import type { ReactElement } from "react";

type variantType = "primary" | "secondary"

interface ButtonInterface {
    variant: variantType;
    size: "sm" | "md" | "lg";
    text:  string;
    startIcon?: ReactElement;
    endicon?: any;
    onclick: () => void;
}

const variantOption = {
    primary: "bg-purple-700 text-white",
    secondary: "bg-gray-300 text-purple-700"
}

const size = {
    sm: "py-1 px-2",
    md: "py-2 px-4",
    lg: "py-4 px-6"
}

const defaultProp = {
    rounded: "rounded-sm"
}

const Button = (props: ButtonInterface) => {
  return (

    <button className={`${variantOption[props.variant]} ${size[props.size]} ${defaultProp.rounded}`}>
        <div className="flex items-center gap-1">
            {props.startIcon} {props.text} {props.endicon}
        </div>
    </button>
  )
}

export default Button