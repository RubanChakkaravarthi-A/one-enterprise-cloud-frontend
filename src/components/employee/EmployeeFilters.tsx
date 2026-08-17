import type {
  ChangeEvent,
} from "react";


import {
  DEPARTMENTS,
} from "../../constants/departments";


import Input from "../common/Input";


import Button from "../common/Button";





interface EmployeeFiltersProps {


  searchTerm:string;


  department:string;


  status:string;




  onSearchChange:(

    event:ChangeEvent<HTMLInputElement>

  )=>void;




  onDepartmentChange:(

    event:ChangeEvent<HTMLSelectElement>

  )=>void;




  onStatusChange:(

    event:ChangeEvent<HTMLSelectElement>

  )=>void;




  onReset:()=>void;


}









function EmployeeFilters({

  searchTerm,

  department,

  status,

  onSearchChange,

  onDepartmentChange,

  onStatusChange,

  onReset,

}:EmployeeFiltersProps) {



  return (


    <div

      className="
        bg-white/80
        backdrop-blur-xl
        rounded-3xl
        shadow-xl
        border
        border-white
        p-6
        mb-10
      "

    >






      <div

        className="
          grid
          md:grid-cols-4
          gap-5
        "

      >







        {/* Search */}


        <div

          className="
            flex
            flex-col
            gap-2
          "

        >


          <label

            className="
              font-semibold
              text-gray-700
            "

          >

            Search Employee

          </label>





          <Input

            type="text"

            value={searchTerm}

            onChange={onSearchChange}

            placeholder="Search by name, ID, email"

          />



        </div>









        {/* Department */}


        <div

          className="
            flex
            flex-col
            gap-2
          "

        >



          <label

            className="
              font-semibold
              text-gray-700
            "

          >

            Department

          </label>







          <select


            value={department}


            onChange={onDepartmentChange}


            className="
              h-12
              px-4
              rounded-xl
              border
              border-gray-300
              outline-none
              focus:border-blue-600
              focus:ring-4
              focus:ring-blue-100
            "


          >



            <option value="">

              All Departments

            </option>




            {

              DEPARTMENTS.map(

                (item)=>(


                  <option

                    key={item}

                    value={item}

                  >

                    {item}

                  </option>


                )

              )

            }




          </select>





        </div>









        {/* Status */}


        <div

          className="
            flex
            flex-col
            gap-2
          "

        >



          <label

            className="
              font-semibold
              text-gray-700
            "

          >

            Status

          </label>







          <select


            value={status}


            onChange={onStatusChange}


            className="
              h-12
              px-4
              rounded-xl
              border
              border-gray-300
              outline-none
              focus:border-blue-600
              focus:ring-4
              focus:ring-blue-100
            "


          >



            <option value="">

              All Status

            </option>




            <option value="Active">

              Active

            </option>




            <option value="Inactive">

              Inactive

            </option>




          </select>




        </div>









        {/* Reset */}



        <div

          className="
            flex
            items-end
          "

        >



          <Button

            variant="secondary"

            onClick={onReset}

          >

            Reset Filters

          </Button>





        </div>






      </div>





    </div>


  );

}





export default EmployeeFilters;