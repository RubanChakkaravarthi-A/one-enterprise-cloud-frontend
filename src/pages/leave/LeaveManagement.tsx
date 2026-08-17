import {
  useEffect,
  useState,
} from "react";


import LeaveSummary from "../../components/leave/LeaveSummary";

import LeaveFilter from "../../components/leave/LeaveFilter";

import LeaveTable from "../../components/leave/LeaveTable";


import useLeave from "../../hooks/useLeave";


import type {
  LeaveRequest,
  LeaveType,
} from "../../types/leave";


import type {
  Employee,
} from "../../types/employee";


import {
  getEmployees,
} from "../../services/api/employeeApi";







function LeaveManagement() {



  const {

    leaveRequests,

    addLeave,

    changeLeaveStatus,

    removeLeave,

  } = useLeave();







  const [employees,setEmployees] =

    useState<Employee[]>([]);







  const [selectedEmployee,setSelectedEmployee] =

    useState("");



  const [leaveType,setLeaveType] =

    useState<LeaveType>("Casual Leave");



  const [fromDate,setFromDate] =

    useState("");



  const [toDate,setToDate] =

    useState("");



  const [reason,setReason] =

    useState("");







  const [searchTerm,setSearchTerm] =

    useState("");



  const [department,setDepartment] =

    useState("");



  const [status,setStatus] =

    useState("");









  useEffect(()=>{


    const employeeData =

      getEmployees();



    setEmployees(

      employeeData

    );


  },[]);









  const calculateDays = ()=>{


    if(

      !fromDate ||

      !toDate

    ){

      return 0;

    }







    const start =

      new Date(fromDate);



    const end =

      new Date(toDate);







    const difference =

      end.getTime()

      -

      start.getTime();







    return (

      Math.floor(

        difference /

        (1000 * 3600 * 24)

      )

      + 1

    );


  };









  const availableEmployees =

    employees.filter(

      (employee)=>

        !leaveRequests.some(

          (leave)=>

            leave.employeeId === employee.id

            &&

            leave.status === "Pending"

            &&

            leave.fromDate === fromDate

        )

    );









  const handleSubmit = ()=>{



    const employee =

      employees.find(

        (emp)=>

          emp.id === selectedEmployee

      );







    if(!employee){


      alert(

        "Please select employee"

      );


      return;


    }







    if(

      !fromDate ||

      !toDate

    ){


      alert(

        "Please select leave dates"

      );


      return;


    }







    if(

      new Date(fromDate)

      >

      new Date(toDate)

    ){


      alert(

        "From date cannot be greater than To date"

      );


      return;


    }







    if(

      reason.trim() === ""

    ){


      alert(

        "Please enter reason"

      );


      return;


    }







    const totalDays =

      calculateDays();







    const duplicateLeave =

      leaveRequests.some(

        (leave)=>

          leave.employeeId === employee.id

          &&

          leave.fromDate === fromDate

          &&

          leave.toDate === toDate

      );







    if(duplicateLeave){


      alert(

        "Leave already applied for this date"

      );


      return;


    }









    const newLeave: LeaveRequest = {



      id:

        Date.now()

        .toString(),






      employeeId:

        employee.id,





      employeeName:

        employee.name,





      department:

        employee.department,





      designation:

        employee.designation,





      leaveType,





      fromDate,





      toDate,





      totalDays,





      reason,





      status:

        "Pending",





      appliedDate:

        new Date()

        .toISOString()

        .split("T")[0],


    };







    addLeave(

      newLeave

    );







    setSelectedEmployee("");

    setLeaveType("Casual Leave");

    setFromDate("");

    setToDate("");

    setReason("");



  };

    const filteredLeaves =

    leaveRequests.filter(

      (leave)=>{


        const search =

          searchTerm.toLowerCase();





        const matchesSearch =


          leave.employeeName

          .toLowerCase()

          .includes(search)

          ||

          leave.employeeId

          .toLowerCase()

          .includes(search);







        const matchesDepartment =


          department === ""

          ||

          leave.department === department;







        const matchesStatus =


          status === ""

          ||

          leave.status === status;







        return (

          matchesSearch

          &&

          matchesDepartment

          &&

          matchesStatus

        );


      }

    );









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
          max-w-7xl
          mx-auto
          px-6
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
            "

          >

            Leave Management

          </h1>




          <p

            className="
              text-gray-600
              mt-3
            "

          >

            Manage employee leave requests.

          </p>



        </div>









        {/* Apply Leave */}

        <div

          className="
            bg-white
            rounded-2xl
            shadow-lg
            p-6
            mb-10
          "

        >



          <h2

            className="
              text-xl
              font-bold
              mb-5
            "

          >

            Apply Leave

          </h2>







          <div

            className="
              grid
              md:grid-cols-5
              gap-4
            "

          >





            <select

              value={selectedEmployee}

              onChange={(e)=>

                setSelectedEmployee(

                  e.target.value

                )

              }

              className="
                w-full
                border
                rounded-lg
                px-4
                py-3
              "

            >


              <option value="">

                Select Employee

              </option>





              {

                availableEmployees.map(

                  (employee)=>(


                    <option

                      key={employee.id}

                      value={employee.id}

                    >

                      {employee.name}

                    </option>


                  )

                )

              }



            </select>









            <select

              value={leaveType}

              onChange={(e)=>

                setLeaveType(

                  e.target.value as LeaveType

                )

              }

              className="
                w-full
                border
                rounded-lg
                px-4
                py-3
              "

            >

              <option>
                Casual Leave
              </option>

              <option>
                Sick Leave
              </option>

              <option>
                Earned Leave
              </option>

              <option>
                Emergency Leave
              </option>


            </select>









            <input

              type="date"

              value={fromDate}

              onChange={(e)=>

                setFromDate(

                  e.target.value

                )

              }

              className="
                w-full
                border
                rounded-lg
                px-4
                py-3
              "

            />









            <input

              type="date"

              value={toDate}

              onChange={(e)=>

                setToDate(

                  e.target.value

                )

              }

              className="
                w-full
                border
                rounded-lg
                px-4
                py-3
              "

            />









            <button

              onClick={handleSubmit}

              className="
                bg-blue-600
                text-white
                rounded-lg
                font-semibold
                hover:bg-blue-700
              "

            >

              Submit

            </button>



          </div>









          <textarea

            value={reason}

            onChange={(e)=>

              setReason(

                e.target.value

              )

            }

            placeholder="Reason for leave"

            className="
              mt-4
              w-full
              border
              rounded-lg
              px-4
              py-3
              min-h-[100px]
            "

          />



        </div>









        <LeaveSummary

          leaves={leaveRequests}

        />









        <LeaveFilter


          searchTerm={searchTerm}


          department={department}


          status={status}



          onSearchChange={(e)=>

            setSearchTerm(

              e.target.value

            )

          }



          onDepartmentChange={(e)=>

            setDepartment(

              e.target.value

            )

          }



          onStatusChange={(e)=>

            setStatus(

              e.target.value

            )

          }



          onReset={()=>{

            setSearchTerm("");

            setDepartment("");

            setStatus("");

          }}


        />









        <LeaveTable


          leaves={filteredLeaves}



          onStatusChange={

            changeLeaveStatus

          }



          onDelete={

            removeLeave

          }


        />




      </div>


    </section>

  );

}





export default LeaveManagement;