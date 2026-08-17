import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";



function Header() {


  const navigate = useNavigate();



  const {
    user,
    logout,
  } = useAuth();






  const handleLogout = () => {


    logout();


    navigate("/login");


  };








  return (


    <header
      className="
        h-20
        bg-white/80
        backdrop-blur-xl
        border-b
        border-gray-200
        shadow-sm
        flex
        items-center
        justify-between
        px-8
      "
    >





      {/* Left Section */}



      <div>


        <h1
          className="
            text-2xl
            font-bold
            text-gray-900
          "
        >

          One Enterprise Cloud

        </h1>



        <p
          className="
            text-sm
            text-gray-500
            mt-1
          "
        >

          Enterprise Management Platform

        </p>



      </div>









      {/* Right Section */}



      <div
        className="
          flex
          items-center
          gap-6
        "
      >







        {/* Notification */}



        <button

          type="button"

          className="
            relative
            text-gray-600
            hover:text-blue-600
            transition
          "

        >


          🔔




          <span
            className="
              absolute
              -top-2
              -right-2
              bg-red-500
              text-white
              text-xs
              rounded-full
              w-5
              h-5
              flex
              items-center
              justify-center
            "
          >

            3

          </span>



        </button>









        {/* User Profile */}



        <div
          className="
            flex
            items-center
            gap-4
          "
        >





          {/* Avatar */}



          <div
            className="
              w-11
              h-11
              rounded-full
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
              font-bold
            "
          >

            {
              user?.email
                ? user.email
                    .charAt(0)
                    .toUpperCase()
                : "U"
            }


          </div>









          {/* User Details */}



          <div>


            <h3
              className="
                font-semibold
                text-gray-900
              "
            >

              {
                user?.email ||
                "User"
              }


            </h3>




            <p
              className="
                text-sm
                text-gray-500
              "
            >

              {
                user?.role ||
                "Guest"
              }


            </p>



          </div>









          {/* Logout Button */}



          <button


            onClick={handleLogout}


            className="
              px-4
              py-2
              rounded-xl
              bg-red-500
              text-white
              font-semibold
              hover:bg-red-600
              transition
            "


          >

            Logout


          </button>





        </div>





      </div>





    </header>


  );

}



export default Header;