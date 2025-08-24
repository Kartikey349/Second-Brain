import type { ReactElement } from "react";

type variantType = "primary" | "secondary"

interface ButtonInterface {
    variant: variantType;
    size: "sm" | "md" | "lg";
    text:  string;
    startIcon?: ReactElement;
    endicon?: any;
    onclick?: () => void;
}

const variantOption = {
    primary: "bg-purple-800 text-white",
    secondary: "bg-gray-300 text-purple-800"
}

const size = {
    sm: "py-1 px-2 rounded-sm",
    md: "py-2 px-4 rounded-md",
    lg: "py-4 px-6 rounded-md"
}


const Button = (props: ButtonInterface) => {
  return (

    <button className={`${variantOption[props.variant]} ${size[props.size]} cursor-pointer flex justify-center`}>
        <div className="flex items-center gap-1">
            {props.startIcon} {props.text} {props.endicon}
        </div>
    </button>
  )
}

export default Button