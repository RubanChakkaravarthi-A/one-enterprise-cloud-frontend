import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Employee } from "../../types/employee";


function EmployeeRegistration() {


  const [employee, setEmployee] = useState<Employee>({
    id: "",
    name: "",
    email: "",
    department: "",
    designation: "",
  });


  const [mobile, setMobile] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");



  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {

    const { name, value } = event.target;


    setEmployee((previous) => ({
      ...previous,
      [name]: value,
    }));

  };




  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();



    if(password !== confirmPassword){

      alert("Password does not match");

      return;

    }




    const employeeData = {

      ...employee,

      mobile,

      joiningDate,

      gender,

      password,

    };




   const existingEmployees = JSON.parse(
  localStorage.getItem("employees") || "[]"
);


const updatedEmployees = [
  ...existingEmployees,
  employeeData
];


localStorage.setItem(
  "employees",
  JSON.stringify(updatedEmployees)
);

    console.log(employeeData);



    alert("Employee Registered Successfully");

  };





  const handleReset = () => {


    setEmployee({

      id:"",
      name:"",
      email:"",
      department:"",
      designation:""

    });



    setMobile("");

    setJoiningDate("");

    setGender("");

    setPassword("");

    setConfirmPassword("");

  };





  return (


    <section
      className="
      min-h-screen
      py-20
      bg-gradient-to-br
      from-blue-50
      via-white
      to-indigo-100
      "
    >


      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        "
      >



        <div
          className="
          bg-white/70
          backdrop-blur-xl
          rounded-3xl
          p-10
          shadow-2xl
          border
          border-white
          "
        >




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
              mb-4
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

              Complete the registration form to become part of the One Enterprise Cloud Platform.

            </p>



          </div>





          <form
            onSubmit={handleSubmit}
            onReset={handleReset}
          >



            <div
              className="
              grid
              md:grid-cols-2
              gap-6
              "
            >




              <div className="flex flex-col gap-2">


                <label
                  className="
                  font-semibold
                  text-gray-700
                  "
                >

                  Employee ID

                </label>



                <input

                  type="text"

                  name="id"

                  value={employee.id}

                  onChange={handleChange}

                  placeholder="EMP001"

                  required

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

                />

              </div>





              <div className="flex flex-col gap-2">


                <label
                  className="
                  font-semibold
                  text-gray-700
                  "
                >

                  Full Name

                </label>




                <input

                  type="text"

                  name="name"

                  value={employee.name}

                  onChange={handleChange}

                  placeholder="Enter Full Name"

                  required

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

                />



              </div>





              <div className="flex flex-col gap-2">


                <label
                  className="
                  font-semibold
                  text-gray-700
                  "
                >

                  Email Address

                </label>



                <input

                  type="email"

                  name="email"

                  value={employee.email}

                  onChange={handleChange}

                  placeholder="example@email.com"

                  required

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

                />



              </div>




              <div className="flex flex-col gap-2">


                <label
                  className="
                  font-semibold
                  text-gray-700
                  "
                >

                  Mobile Number

                </label>



                <input

                  type="tel"

                  value={mobile}

                  onChange={(event)=>setMobile(event.target.value)}

                  placeholder="9876543210"

                  required

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

                />



              </div>

                            <div className="flex flex-col gap-2">

                <label
                  className="
                  font-semibold
                  text-gray-700
                  "
                >
                  Department
                </label>


                <select

                  name="department"

                  value={employee.department}

                  onChange={handleChange}

                  required

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
                    Select Department
                  </option>

                  <option value="HR">
                    HR
                  </option>

                  <option value="Development">
                    Development
                  </option>

                  <option value="Testing">
                    Testing
                  </option>

                  <option value="Support">
                    Support
                  </option>

                  <option value="Finance">
                    Finance
                  </option>

                  <option value="Marketing">
                    Marketing
                  </option>


                </select>


              </div>





              <div className="flex flex-col gap-2">

                <label
                  className="
                  font-semibold
                  text-gray-700
                  "
                >
                  Designation
                </label>


                <input

                  type="text"

                  name="designation"

                  value={employee.designation}

                  onChange={handleChange}

                  placeholder="Software Engineer"

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

                />


              </div>





              <div className="flex flex-col gap-2">

                <label
                  className="
                  font-semibold
                  text-gray-700
                  "
                >
                  Date of Joining
                </label>


                <input

                  type="date"

                  value={joiningDate}

                  onChange={(event)=>setJoiningDate(event.target.value)}

                  className="
                  h-12
                  px-4
                  rounded-xl
                  border
                  border-gray-300
                  outline-none
                  "

                />


              </div>





              <div className="flex flex-col gap-2">

                <label
                  className="
                  font-semibold
                  text-gray-700
                  "
                >
                  Gender
                </label>


                <select

                  value={gender}

                  onChange={(event)=>setGender(event.target.value)}

                  required

                  className="
                  h-12
                  px-4
                  rounded-xl
                  border
                  border-gray-300
                  outline-none
                  "

                >

                  <option value="">
                    Select Gender
                  </option>

                  <option value="Male">
                    Male
                  </option>

                  <option value="Female">
                    Female
                  </option>

                  <option value="Other">
                    Other
                  </option>


                </select>


              </div>





              <div className="flex flex-col gap-2">


                <label
                  className="
                  font-semibold
                  text-gray-700
                  "
                >
                  Password
                </label>



                <input

                  type="password"

                  value={password}

                  onChange={(event)=>setPassword(event.target.value)}

                  placeholder="Enter Password"

                  required

                  className="
                  h-12
                  px-4
                  rounded-xl
                  border
                  border-gray-300
                  outline-none
                  "

                />


              </div>





              <div className="flex flex-col gap-2">


                <label
                  className="
                  font-semibold
                  text-gray-700
                  "
                >
                  Confirm Password
                </label>



                <input

                  type="password"

                  value={confirmPassword}

                  onChange={(event)=>setConfirmPassword(event.target.value)}

                  placeholder="Confirm Password"

                  required

                  className="
                  h-12
                  px-4
                  rounded-xl
                  border
                  border-gray-300
                  outline-none
                  "

                />


              </div>



            </div>






            <div
              className="
              flex
              justify-center
              gap-5
              mt-10
              "
            >


              <button

                type="submit"

                className="
                px-10
                py-3
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                text-white
                font-bold
                hover:scale-105
                transition
                "

              >

                Register

              </button>




              <button

                type="reset"

                className="
                px-10
                py-3
                rounded-xl
                bg-blue-50
                text-blue-600
                font-bold
                hover:bg-blue-100
                transition
                "

              >

                Reset

              </button>



            </div>



          </form>



        </div>



      </div>



    </section>


  );


}



export default EmployeeRegistration;