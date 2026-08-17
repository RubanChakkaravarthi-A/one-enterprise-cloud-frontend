import type {
  ReactNode,
} from "react";



interface EmptyStateProps {


  title?: string;


  message?: string;


  icon?: ReactNode;


}




function EmptyState({

  title = "No Data Found",

  message = "There are no records available.",

  icon,

}: EmptyStateProps) {



  return (

    <div

      className="
        flex
        flex-col
        items-center
        justify-center
        py-12
        text-center
      "

    >




      {
        icon && (

          <div

            className="
              text-4xl
              mb-4
            "

          >

            {icon}

          </div>

        )
      }







      <h3

        className="
          text-xl
          font-bold
          text-gray-800
        "

      >

        {title}

      </h3>







      <p

        className="
          text-gray-500
          mt-2
        "

      >

        {message}

      </p>





    </div>


  );

}



export default EmptyState;