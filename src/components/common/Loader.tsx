interface LoaderProps {


  text?: string;


}




function Loader({

  text = "Loading..."

}: LoaderProps) {



  return (


    <div

      className="
        flex
        flex-col
        items-center
        justify-center
        py-10
      "

    >



      <div

        className="
          w-12
          h-12
          border-4
          border-blue-200
          border-t-blue-600
          rounded-full
          animate-spin
        "

      >


      </div>






      <p

        className="
          mt-4
          text-gray-600
          font-semibold
        "

      >

        {text}

      </p>




    </div>


  );

}



export default Loader;