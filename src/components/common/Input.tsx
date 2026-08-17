import type {
  InputHTMLAttributes,
} from "react";



interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {


  label?: string;


  error?: string;


}





function Input({

  label,

  error,

  className = "",

  ...props

}: InputProps) {



  return (

    <div className="w-full">


      {
        label && (

          <label

            className="
              block
              text-gray-700
              font-semibold
              mb-2
            "

          >

            {label}

          </label>

        )
      }





      <input


        className={`
          w-full
          px-4
          py-3
          rounded-xl
          border
          border-gray-300
          outline-none
          focus:ring-2
          focus:ring-blue-500
          transition
          ${className}
        `}


        {...props}


      />







      {
        error && (

          <p

            className="
              text-red-500
              text-sm
              mt-2
            "

          >

            {error}

          </p>

        )
      }



    </div>

  );

}



export default Input;