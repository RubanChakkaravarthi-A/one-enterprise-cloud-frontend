import { useEffect, useState } from "react";
import EmployeeCard from "../components/employee/EmployeeCard";
import type { Employee } from "../types/employee";


function EmployeeDirectory() {

const [employees, setEmployees] = useState<Employee[]>([]);

useEffect(() => {

  const storedEmployees = JSON.parse(
    localStorage.getItem("employees") || "[]"
  );

  setEmployees(storedEmployees);

}, []);

  return (

    <section className="
      min-h-screen
      bg-gradient-to-br
      from-blue-50
      via-white
      to-indigo-100
      py-16
    ">


      <div className="
        max-w-7xl
        mx-auto
        px-6
      ">


        <div className="
          text-center
          mb-12
        ">

          <h1 className="
            text-4xl
            font-extrabold
            text-gray-900
            mb-4
          ">

            Employee Directory

          </h1>


          <p className="
            text-gray-600
            text-lg
          ">

            View all employees in One Enterprise Cloud Platform.

          </p>


        </div>



        <div className="
          grid
          md:grid-cols-3
          gap-8
        ">


          {
            employees.map((employee) => (

              <EmployeeCard

                key={employee.id}

                employee={employee}

              />

            ))
          }


        </div>


      </div>


    </section>

  );

}


export default EmployeeDirectory;