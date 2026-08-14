const modules = [

  {
    title: "HRMS",
    description:
      "Manage employee records, attendance, payroll and leave management efficiently.",
  },


  {
    title: "CRM",
    description:
      "Track customers, sales pipeline and improve customer relationships.",
  },


  {
    title: "ERP",
    description:
      "Integrate finance, inventory, procurement and business operations.",
  },


  {
    title: "Finance",
    description:
      "Monitor accounting, budgeting, expenses and financial reporting.",
  },


  {
    title: "AI Platform",
    description:
      "Build intelligent applications using Artificial Intelligence and Machine Learning.",
  },


  {
    title: "Analytics",
    description:
      "Generate real-time reports and business insights with interactive dashboards.",
  },

];



function ModuleSection() {


  return (


    <section

      id="modules"

      className="py-20 bg-white"

    >



      <div className="max-w-7xl mx-auto px-6">



        <h2

          className="
          text-4xl
          font-extrabold
          text-center
          text-gray-900
          mb-12
          "

        >

          Enterprise Modules

        </h2>





        <div

          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "

        >





          {
            modules.map((module) => (


              <div

                key={module.title}

                className="
                bg-white
                rounded-xl
                p-6
                shadow-md
                border
                border-gray-100
                hover:shadow-xl
                transition
                "

              >



                <h3

                  className="
                  text-xl
                  font-bold
                  text-blue-600
                  mb-3
                  "

                >

                  {module.title}


                </h3>




                <p

                  className="
                  text-gray-600
                  leading-relaxed
                  "

                >

                  {module.description}


                </p>




              </div>



            ))
          }





        </div>




      </div>




    </section>


  );

}



export default ModuleSection;