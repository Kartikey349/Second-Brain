type variantType = "primary" | "secondary"

interface ButtonInterface {
    variant: variantType;
    size: "sm" | "md" | "lg";
    text:  string;
    startIcon?: any;
    endicon?: any;
    onclick: () => void;
}

const variantOption = {
    primary: "bg-purple-600 text-white",
    secondary: "bg-gray-300 text-purple-600"
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
        {props.text}
    </button>
  )
}

export default Button