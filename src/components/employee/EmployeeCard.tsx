import type { Employee } from "../../types/employee";
import EmployeeDetails from "./EmployeeDetails";


interface EmployeeCardProps {

  employee: Employee;

}



function EmployeeCard({ employee }: EmployeeCardProps) {


  return (

    <div className="
      bg-white/70
      backdrop-blur-xl
      rounded-3xl
      p-6
      shadow-lg
      border
      border-white
      hover:scale-105
      transition
    ">


      <div className="
        mb-5
      ">


        <h2 className="
          text-2xl
          font-bold
          text-blue-600
        ">

          {employee.name}

        </h2>


        <p className="
          text-gray-600
          mt-2
        ">

          {employee.designation}

        </p>


      </div>



      <div className="
        space-y-2
        text-gray-700
      ">


        <p>

          <span className="font-semibold">
            Employee ID:
          </span>

          {" "}

          {employee.id}

        </p>



        <p>

          <span className="font-semibold">
            Department:
          </span>

          {" "}

          {employee.department}

        </p>



        <p>

          <span className="font-semibold">
            Email:
          </span>

          {" "}

          {employee.email}

        </p>


      </div>



      <EmployeeDetails employee={employee} />


    </div>

  );

}


export default EmployeeCard;