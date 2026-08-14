import { Link } from "react-router-dom";



function HeroSection() {

  return (

    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-20">


      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">



        {/* Hero Content */}

        <div>


          <span className="
            inline-block
            px-5
            py-2
            rounded-full
            bg-blue-100
            text-blue-600
            font-semibold
            text-sm
            mb-6
          ">

            Enterprise Cloud Platform

          </span>





          <h1 className="
            text-5xl
            md:text-6xl
            font-extrabold
            leading-tight
            text-gray-900
            mb-6
          ">

            Modern Cloud Infrastructure
            for Future-Ready Enterprises

          </h1>





          <p className="
            text-lg
            text-gray-600
            leading-relaxed
            mb-8
          ">

            Accelerate digital transformation with secure,
            scalable, AI-powered enterprise cloud services
            built for organizations of every size.

          </p>





          <div className="flex gap-5 flex-wrap">


           <Link

  to="/register"

  className="
  px-8
  py-3
  rounded-xl
  bg-gradient-to-r
  from-blue-600
  to-indigo-600
  text-white
  font-bold
  hover:scale-105
  transition
  "

>

  Get Started

</Link>





            <a

              href="#"

              className="
              px-8
              py-3
              rounded-xl
              border-2
              border-blue-600
              text-blue-600
              font-bold
              hover:bg-blue-50
              transition
              "

            >

              Request Demo

            </a>


          </div>


        </div>







        {/* Dashboard Card */}


        <div className="
          bg-white/70
          backdrop-blur-xl
          rounded-3xl
          p-8
          shadow-2xl
          border
          border-white
        ">


          <div className="
            flex
            justify-between
            items-center
            mb-8
          ">


            <h3 className="text-2xl font-bold text-gray-800">

              Cloud Dashboard

            </h3>



            <span className="text-green-500 font-bold">

              ● Live

            </span>


          </div>





          <div className="grid grid-cols-2 gap-5">


            <div className="bg-blue-50 rounded-2xl p-5">

              <p className="text-gray-600 font-medium">

                Cloud Apps

              </p>


              <h2 className="text-4xl font-extrabold text-blue-600 mt-2">

                128

              </h2>


            </div>





            <div className="bg-blue-50 rounded-2xl p-5">

              <p className="text-gray-600 font-medium">

                Users

              </p>


              <h2 className="text-4xl font-extrabold text-blue-600 mt-2">

                52K

              </h2>


            </div>





            <div className="bg-blue-50 rounded-2xl p-5">

              <p className="text-gray-600 font-medium">

                Storage

              </p>


              <h2 className="text-4xl font-extrabold text-blue-600 mt-2">

                95TB

              </h2>


            </div>





            <div className="bg-blue-50 rounded-2xl p-5">

              <p className="text-gray-600 font-medium">

                Uptime

              </p>


              <h2 className="text-4xl font-extrabold text-blue-600 mt-2">

                99.99%

              </h2>


            </div>


          </div>


        </div>


      </div>


    </section>

  );

}


export default HeroSection;