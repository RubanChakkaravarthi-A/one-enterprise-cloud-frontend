import type {
  ChangeEvent,
} from "react";



interface AttendanceFiltersProps {


  searchTerm: string;


  department: string;


  status: string;



  onSearchChange: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;



  onDepartmentChange: (
    event: ChangeEvent<HTMLSelectElement>
  ) => void;



  onStatusChange: (
    event: ChangeEvent<HTMLSelectElement>
  ) => void;



  onReset: () => void;


}





function AttendanceFilters({

  searchTerm,

  department,

  status,

  onSearchChange,

  onDepartmentChange,

  onStatusChange,

  onReset,

}: AttendanceFiltersProps) {



  return (

    <div

      className="
        bg-white/80
        backdrop-blur-xl
        rounded-3xl
        shadow-lg
        border
        border-white
        p-6
        mb-8
      "

    >





      <div

        className="
          grid
          md:grid-cols-4
          gap-6
          items-end
        "

      >







        {/* Search Employee */}


        <div>


          <label

            className="
              block
              text-gray-700
              font-semibold
              mb-3
            "

          >

            Search Employee

          </label>





          <input


            type="text"


            value={searchTerm}


            onChange={onSearchChange}


            placeholder="Search by ID or name"



            className="

              w-full

              h-14

              px-5

              rounded-xl

              border

              border-gray-300

              text-lg

              outline-none

              transition

              focus:ring-2

              focus:ring-blue-500

            "


          />


        </div>









        {/* Department */}


        <div>


          <label

            className="
              block
              text-gray-700
              font-semibold
              mb-3
            "

          >

            Department

          </label>





          <select


            value={department}


            onChange={onDepartmentChange}



            className="

              w-full

              h-14

              px-5

              rounded-xl

              border

              border-gray-300

              text-lg

              bg-white

              outline-none

              cursor-pointer

              transition

              focus:ring-2

              focus:ring-blue-500

            "


          >


            <option value="">

              All Departments

            </option>



            <option value="HR">

              HR

            </option>



            <option value="IT">

              IT

            </option>



            <option value="Finance">

              Finance

            </option>


          </select>


        </div>









        {/* Status */}


        <div>


          <label

            className="
              block
              text-gray-700
              font-semibold
              mb-3
            "

          >

            Status

          </label>





          <select


            value={status}


            onChange={onStatusChange}



            className="

              w-full

              h-14

              px-5

              rounded-xl

              border

              border-gray-300

              text-lg

              bg-white

              outline-none

              cursor-pointer

              transition

              focus:ring-2

              focus:ring-blue-500

            "


          >



            <option value="">

              All Status

            </option>



            <option value="Present">

              Present

            </option>



            <option value="Absent">

              Absent

            </option>



            <option value="Half Day">

              Half Day

            </option>



            <option value="WFH">

              WFH

            </option>



          </select>



        </div>









        {/* Reset Button */}



        <button


          type="button"



          onClick={onReset}



          className="

            w-full

            h-14

            rounded-xl

            bg-gray-200

            text-gray-700

            text-lg

            font-bold

            hover:bg-gray-300

            transition

            duration-300

          "


        >

          Reset


        </button>






      </div>






    </div>


  );

}



export default AttendanceFilters;