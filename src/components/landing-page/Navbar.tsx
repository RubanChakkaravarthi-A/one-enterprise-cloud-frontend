import { Link } from "react-router-dom";



function Navbar() {

  return (

    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">


      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">


        <div className="text-2xl font-extrabold text-blue-600">

          ☁ One Enterprise Cloud

        </div>




        <nav>

          <ul className="flex items-center gap-8 text-gray-700 font-semibold">


            <li>
              <a 
                href="#"
                className="hover:text-blue-600 transition"
              >
                Home
              </a>
            </li>



            <li>
              <a 
                href="#modules"
                className="hover:text-blue-600 transition"
              >
                Modules
              </a>
            </li>



            <li>
              <a 
                href="#technology"
                className="hover:text-blue-600 transition"
              >
                Solutions
              </a>
            </li>



            <li>
              <a 
                href="#"
                className="hover:text-blue-600 transition"
              >
                About
              </a>
            </li>



            <li>
              <a 
                href="#"
                className="hover:text-blue-600 transition"
              >
                Contact
              </a>
            </li>




            <li>

              <a

                href="#"

                className="
                px-5
                py-2
                rounded-lg
                border
                border-blue-600
                text-blue-600
                hover:bg-blue-50
                transition
                "

              >

                Login

              </a>

            </li>





            <li>

  <Link

    to="/register"

    className="
    px-5
    py-2
    rounded-lg
    bg-gradient-to-r
    from-blue-600
    to-indigo-600
    text-white
    hover:opacity-90
    transition
    "

  >

    Register

  </Link>

</li>



          </ul>


        </nav>


      </div>


    </header>

  );

}


export default Navbar;