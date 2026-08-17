import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import type { Employee } from "../../types/employee";

import { DEPARTMENTS } from "../../constants/departments";


interface EmployeeFormProps {

  editingEmployee: Employee | null;

  onAddEmployee: (
    employee: Employee
  ) => void;


  onUpdateEmployee: (
    employee: Employee
  ) => void;


  onCancelEdit: () => void;

}





const defaultEmployee: Employee = {

  id: "",

  name: "",

  email: "",

  department: "",

  designation: "",

  status: "Active",

  mobile: "",

  joiningDate: "",

};







function EmployeeForm({

  editingEmployee,

  onAddEmployee,

  onUpdateEmployee,

  onCancelEdit,

}: EmployeeFormProps) {



  const [employee,setEmployee] =

    useState<Employee>(
      defaultEmployee
    );







  useEffect(()=>{


    if(editingEmployee){

      setEmployee(
        editingEmployee
      );

    }
    else{

      setEmployee(
        defaultEmployee
      );

    }


  },[editingEmployee]);









  const handleChange = (

    event:

    ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement
    >

  )=>{


    const {
      name,
      value
    } = event.target;



    setEmployee(
      previous=>({

        ...previous,

        [name]:value,

      })
    );


  };









  const validateForm = ()=>{


    if(

      !employee.id.trim() ||

      !employee.name.trim() ||

      !employee.email.trim() ||

      !employee.department ||

      !employee.designation.trim()

    ){

      alert(
        "Please fill all required fields"
      );

      return false;

    }






    const emailPattern =

      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if(

      !emailPattern.test(
        employee.email
      )

    ){

      alert(
        "Please enter valid email"
      );

      return false;

    }







    if(

      employee.mobile &&

      !/^[0-9]{10}$/.test(
        employee.mobile
      )

    ){

      alert(
        "Mobile number must contain 10 digits"
      );

      return false;

    }



    return true;


  };









  const handleSubmit = (

    event:FormEvent<HTMLFormElement>

  )=>{


    event.preventDefault();




    if(!validateForm()){

      return;

    }







    if(editingEmployee){

      onUpdateEmployee(
        employee
      );

    }
    else{

      onAddEmployee(
        employee
      );

    }





    setEmployee(
      defaultEmployee
    );


  };









  const handleCancel = ()=>{


    setEmployee(
      defaultEmployee
    );


    onCancelEdit();


  };









  return (


    <div

      className="
        bg-white/80
        backdrop-blur-xl
        rounded-3xl
        shadow-xl
        border
        border-white
        p-8
        mb-10
      "

    >



      <div className="mb-6">


        <h2

          className="
            text-2xl
            font-bold
            text-gray-900
          "

        >

          {
            editingEmployee
            ?
            "Update Employee"
            :
            "Add Employee"
          }

        </h2>



        <p className="text-gray-600 mt-2">


          {
            editingEmployee

            ?

            "Modify employee information"

            :

            "Register new employee"

          }


        </p>



      </div>









      <form

        onSubmit={handleSubmit}

      >



        <div

          className="
            grid
            md:grid-cols-2
            gap-6
          "

        >





        <InputField

          label="Employee ID"

          name="id"

          value={employee.id}

          disabled={
            Boolean(editingEmployee)
          }

          onChange={handleChange}

          placeholder="EMP001"

        />







        <InputField

          label="Employee Name"

          name="name"

          value={employee.name}

          onChange={handleChange}

          placeholder="John Doe"

        />







        <InputField

          label="Email"

          name="email"

          type="email"

          value={employee.email}

          onChange={handleChange}

          placeholder="employee@mail.com"

        />









        <div className="flex flex-col gap-2">


          <label className="font-semibold">

            Department

          </label>


          <select

            name="department"

            value={employee.department}

            onChange={handleChange}

            className="
              h-12
              px-4
              rounded-xl
              border
            "

          >

            <option value="">

              Select Department

            </option>



            {
              DEPARTMENTS.map(
                dept=>(

                <option

                  key={dept}

                  value={dept}

                >

                  {dept}

                </option>

              ))
            }


          </select>


        </div>









        <InputField

          label="Designation"

          name="designation"

          value={employee.designation}

          onChange={handleChange}

          placeholder="Software Engineer"

        />









        <InputField

          label="Mobile"

          name="mobile"

          value={employee.mobile || ""}

          onChange={handleChange}

          placeholder="9876543210"

        />









        <InputField

          label="Joining Date"

          name="joiningDate"

          type="date"

          value={
            employee.joiningDate || ""
          }

          onChange={handleChange}

        />









        <div className="flex flex-col gap-2">


          <label className="font-semibold">

            Status

          </label>



          <select

            name="status"

            value={employee.status}

            onChange={handleChange}

            className="
              h-12
              px-4
              rounded-xl
              border
            "

          >

            <option value="Active">

              Active

            </option>


            <option value="Inactive">

              Inactive

            </option>


          </select>


        </div>







        </div>








        <div

          className="
            flex
            justify-center
            gap-4
            mt-8
          "

        >



          <button

            type="submit"

            className="
              px-8
              py-3
              rounded-xl
              bg-blue-600
              text-white
              font-bold
            "

          >

            {
              editingEmployee

              ?

              "Update Employee"

              :

              "Add Employee"

            }


          </button>







          {
            editingEmployee &&

            (

            <button

              type="button"

              onClick={handleCancel}

              className="
                px-8
                py-3
                rounded-xl
                bg-gray-200
                font-bold
              "

            >

              Cancel

            </button>

            )

          }



        </div>





      </form>



    </div>


  );

}









interface InputFieldProps {

 label:string;

 name:string;

 value:string;

 type?:string;

 placeholder?:string;

 disabled?:boolean;

 onChange:(
  event:ChangeEvent<HTMLInputElement>
 )=>void;

}







function InputField({

 label,

 name,

 value,

 type="text",

 placeholder,

 disabled,

 onChange,

}:InputFieldProps){


 return (

  <div className="flex flex-col gap-2">


    <label className="font-semibold">

      {label}

    </label>



    <input

      type={type}

      name={name}

      value={value}

      placeholder={placeholder}

      disabled={disabled}

      onChange={onChange}

      className="
        h-12
        px-4
        rounded-xl
        border
      "

    />


  </div>


 );


}







export default EmployeeForm;