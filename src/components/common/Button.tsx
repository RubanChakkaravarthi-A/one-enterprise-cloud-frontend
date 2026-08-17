import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";



interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {


  children: ReactNode;


  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "success";


  size?:
    | "sm"
    | "md"
    | "lg";

}





function Button({

  children,

  variant = "primary",

  size = "md",

  className = "",

  ...props

}: ButtonProps) {



  const variantStyles = {


    primary:
      "bg-blue-600 text-white hover:bg-blue-700",


    secondary:
      "bg-gray-200 text-gray-700 hover:bg-gray-300",


    danger:
      "bg-red-600 text-white hover:bg-red-700",


    success:
      "bg-green-600 text-white hover:bg-green-700",


  };







  const sizeStyles = {


    sm:
      "px-3 py-2 text-sm",


    md:
      "px-5 py-3 text-base",


    lg:
      "px-6 py-4 text-lg",


  };







  return (


    <button

      className={`
        rounded-xl
        font-semibold
        transition
        duration-300
        shadow-sm
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}

      {...props}

    >


      {children}


    </button>


  );


}



export default Button;