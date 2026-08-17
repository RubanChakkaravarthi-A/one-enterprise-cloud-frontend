import type { User } from "../types/auth";




import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";


import {
  useNavigate,
} from "react-router-dom";


import useAuth from "../hooks/useAuth";





function Login() {



  const navigate = useNavigate();



  const {
    login,
  } = useAuth();






  const [email, setEmail] =
    useState("");



  const [password, setPassword] =
    useState("");









  const handleEmailChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {


    setEmail(
      event.target.value
    );


  };









  const handlePasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {


    setPassword(
      event.target.value
    );


  };









  const handleLogin = (
    event: FormEvent<HTMLFormElement>
  ) => {


    event.preventDefault();




const user: User = {

  email,

  role: "ADMIN",

  isAuthenticated: true,

};







    login(user);





    navigate("/dashboard");



  };









  return (


    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-blue-50
        via-white
        to-indigo-100
        p-6
      "
    >



      <div
        className="
          w-full
          max-w-md
          bg-white/80
          backdrop-blur-xl
          rounded-3xl
          shadow-xl
          border
          border-white
          p-8
        "
      >





        {/* Logo */}



        <div
          className="
            text-center
            mb-8
          "
        >



          <div
            className="
              w-20
              h-20
              mx-auto
              rounded-full
              bg-blue-600
              flex
              items-center
              justify-center
              text-4xl
              shadow-lg
            "
          >

            ☁️

          </div>





          <h1
            className="
              mt-5
              text-3xl
              font-extrabold
              text-blue-600
            "
          >

            One Enterprise Cloud

          </h1>





          <p
            className="
              text-gray-500
              mt-2
            "
          >

            Enterprise Platform

          </p>



        </div>









        {/* Login Form */}



        <form

          onSubmit={handleLogin}

          className="
            space-y-5
          "

        >





          <div>


            <label
              className="
                block
                text-gray-700
                font-semibold
                mb-2
              "
            >

              Email

            </label>





            <input


              type="email"


              value={email}


              onChange={handleEmailChange}


              placeholder="Enter your email"


              required



              className="
                w-full
                px-4
                py-3
                rounded-xl
                border
                border-gray-300
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "


            />



          </div>









          <div>



            <label

              className="
                block
                text-gray-700
                font-semibold
                mb-2
              "

            >

              Password

            </label>





            <input



              type="password"



              value={password}



              onChange={handlePasswordChange}



              placeholder="Enter your password"



              required




              className="
                w-full
                px-4
                py-3
                rounded-xl
                border
                border-gray-300
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "



            />



          </div>









          <button


            type="submit"


            className="
              w-full
              py-3
              rounded-xl
              bg-blue-600
              text-white
              font-bold
              hover:bg-blue-700
              transition
              shadow-md
            "


          >

            Login


          </button>





        </form>









        <p
          className="
            text-center
            text-gray-500
            mt-6
          "
        >


          Don't have an account?




          <span


            onClick={() =>
              navigate("/register")
            }


            className="
              text-blue-600
              font-semibold
              ml-2
              cursor-pointer
            "


          >

            Register


          </span>



        </p>





      </div>



    </section>


  );

}



export default Login;