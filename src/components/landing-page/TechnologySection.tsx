const technologies = [

  "Java",

  "Spring Boot",

  "React",

  "Flutter",

  "PostgreSQL",

  "AWS",

];



function TechnologySection() {


  return (


    <section

      id="technology"

      className="py-20 bg-gray-50"

    >



      <div className="max-w-7xl mx-auto px-6">





        <h2 className="
          text-4xl
          font-extrabold
          text-center
          text-gray-900
          mb-12
        ">


          Technology Stack


        </h2>







        <div className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          gap-6
        ">





          {
            technologies.map((technology) => (



              <div

                key={technology}

                className="
                  bg-white
                  rounded-2xl
                  p-6
                  shadow-md
                  border
                  border-gray-100
                  text-center
                  font-bold
                  text-gray-700
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition
                "

              >


                {technology}



              </div>



            ))
          }





        </div>





      </div>




    </section>


  );

}



export default TechnologySection;