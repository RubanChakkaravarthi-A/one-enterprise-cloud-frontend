import type { Employee } from "../../types/employee";


interface EmployeeDetailsProps {

  employee: Employee;

}




function EmployeeDetails({
  employee
}: EmployeeDetailsProps) {


  return (

    <div
      className="
      mt-6
      pt-5
      border-t
      border-gray-200
      "
    >


      <h3
        className="
        text-xl
        font-bold
        text-gray-800
        mb-4
        "
      >

        Employee Details

      </h3>




      <div
        className="
        space-y-3
        text-gray-700
        "
      >


        <div>

          <span className="font-semibold">
            Name:
          </span>

          {" "}

          {employee.name}

        </div>



        <div>

          <span className="font-semibold">
            Employee ID:
          </span>

          {" "}

          {employee.id}

        </div>



        <div>

          <span className="font-semibold">
            Department:
          </span>

          {" "}

          {employee.department}

        </div>



        <div>

          <span className="font-semibold">
            Designation:
          </span>

          {" "}

          {employee.designation}

        </div>



        <div>

          <span className="font-semibold">
            Email:
          </span>

          {" "}

          {employee.email}

        </div>



      </div>


    </div>

  );

}



export default EmployeeDetails;