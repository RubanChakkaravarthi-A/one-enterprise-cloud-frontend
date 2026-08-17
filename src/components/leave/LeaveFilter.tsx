import type {
  ChangeEvent,
} from "react";



interface LeaveFilterProps {


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





function LeaveFilter({

  searchTerm,

  department,

  status,

  onSearchChange,

  onDepartmentChange,

  onStatusChange,

  onReset,

}:LeaveFilterProps){



  return (

    <div

      className="
        bg-white/80
        backdrop-blur-xl
        rounded-3xl
        shadow-lg
        border
        border-white
        p-8
        mb-10
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
              mb-2
            "

          >

            Search Employee

          </label>





          <input


            type="text"


            value={searchTerm}


            onChange={onSearchChange}


            placeholder="Search by ID or Name"



            className="

              w-full

              h-12

              px-4

              rounded-xl

              border

              border-gray-300

              bg-white

              outline-none

              focus:ring-2

              focus:ring-blue-500

              transition

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
              mb-2
            "

          >

            Department

          </label>





          <select


            value={department}


            onChange={onDepartmentChange}



            className="

              w-full

              h-12

              px-4

              rounded-xl

              border

              border-gray-300

              bg-white

              outline-none

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
              mb-2
            "

          >

            Status

          </label>






          <select


            value={status}


            onChange={onStatusChange}



            className="

              w-full

              h-12

              px-4

              rounded-xl

              border

              border-gray-300

              bg-white

              outline-none

              focus:ring-2

              focus:ring-blue-500

            "



          >


            <option value="">

              All Status

            </option>



            <option value="Pending">

              Pending

            </option>



            <option value="Approved">

              Approved

            </option>



            <option value="Rejected">

              Rejected

            </option>



            <option value="Cancelled">

              Cancelled

            </option>



          </select>


        </div>









        {/* Reset Button */}



        <button


          type="button"


          onClick={onReset}



          className="

            w-full

            h-12

            rounded-xl

            bg-gray-200

            text-gray-700

            font-semibold

            hover:bg-gray-300

            transition

          "


        >

          Reset


        </button>







      </div>



    </div>

  );

}




export default LeaveFilter;