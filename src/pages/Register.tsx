import { 
  useState 
} from "react";

import { 
  useNavigate 
} from "react-router-dom";


import EmployeeForm from "../components/employee/EmployeeForm";

import type { Employee } from "../types/employee";

import {
  createEmployee,
} from "../services/api/employeeApi";



function Register() {


  const navigate = useNavigate();



  const [message, setMessage] =
    useState("");





  const handleAddEmployee = (
    employee: Employee
  ) => {


    try {


      createEmployee(employee);



      setMessage(
        "Employee registered successfully. Redirecting to login..."
      );



      setTimeout(() => {


        navigate("/login");


      }, 1500);



    } catch (error) {


      if(error instanceof Error){


        setMessage(
          error.message
        );


      }


    }


  };







  return (


    <section
      className="
        min-h-screen
        py-16
        bg-gradient-to-br
        from-blue-50
        via-white
        to-indigo-100
      "
    >



      <div
        className="
          max-w-5xl
          mx-auto
          px-6
        "
      >




        {/* Header */}


        <div
          className="
            text-center
            mb-10
          "
        >


          <h1
            className="
              text-4xl
              font-extrabold
              text-gray-900
              mb-3
            "
          >

            Employee Registration

          </h1>




          <p
            className="
              text-gray-600
              text-lg
            "
          >

            Register a new employee into One Enterprise Cloud.

          </p>



        </div>









        {/* Success / Error Message */}



        {
          message && (


            <div

              className="
                mb-6
                bg-white
                rounded-xl
                shadow
                p-4
                text-center
                text-blue-600
                font-semibold
              "

            >


              {message}



            </div>


          )
        }









        {/* Employee Registration Form */}



        <EmployeeForm



          editingEmployee={
            null
          }




          onAddEmployee={
            handleAddEmployee
          }





          onUpdateEmployee={
            () => {}
          }





          onCancelEdit={
            () => {}
          }



        />





      </div>




    </section>


  );


}



export default Register;