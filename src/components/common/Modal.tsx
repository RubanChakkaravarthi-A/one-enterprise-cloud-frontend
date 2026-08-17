import type {
  ReactNode,
} from "react";



interface ModalProps {


  isOpen: boolean;


  title: string;


  children: ReactNode;


  onClose: () => void;


}





function Modal({

  isOpen,

  title,

  children,

  onClose,

}: ModalProps) {



  if (!isOpen) {

    return null;

  }







  return (

    <div

      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/40
        backdrop-blur-sm
        px-4
      "

    >




      <div

        className="
          bg-white
          rounded-3xl
          shadow-2xl
          w-full
          max-w-lg
          p-6
        "

      >





        <div

          className="
            flex
            justify-between
            items-center
            mb-5
          "

        >



          <h2

            className="
              text-xl
              font-bold
              text-gray-800
            "

          >

            {title}

          </h2>





          <button

            onClick={onClose}

            className="
              text-gray-500
              hover:text-red-500
              text-xl
              font-bold
            "

          >

            ×

          </button>



        </div>








        <div>

          {children}

        </div>






      </div>



    </div>


  );

}



export default Modal;