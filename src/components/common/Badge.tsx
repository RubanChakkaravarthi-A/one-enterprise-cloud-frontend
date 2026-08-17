import type {
  ReactNode,
} from "react";



interface BadgeProps {


  children: ReactNode;


  variant?:

    | "success"
    | "danger"
    | "warning"
    | "info"
    | "default";


}




function Badge({

  children,

  variant = "default",

}: BadgeProps) {



  const styles = {


    success:
      "bg-green-100 text-green-700",


    danger:
      "bg-red-100 text-red-700",


    warning:
      "bg-yellow-100 text-yellow-700",


    info:
      "bg-blue-100 text-blue-700",


    default:
      "bg-gray-100 text-gray-700",


  };







  return (


    <span

      className={`
        inline-flex
        items-center
        px-3
        py-1
        rounded-full
        text-sm
        font-semibold
        ${styles[variant]}
      `}

    >

      {children}


    </span>


  );


}



export default Badge;