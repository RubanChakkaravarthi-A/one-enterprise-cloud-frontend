import {
  useEffect,
  useState,
} from "react";


import AttendanceSummary from "../../components/attendance/AttendanceSummary";

import AttendanceFilters from "../../components/attendance/AttendanceFilters";

import AttendanceTable from "../../components/attendance/AttendanceTable";


import useAttendance from "../../hooks/useAttendance";


import type {
  Attendance,
} from "../../types/attendance";


import type {
  Employee,
} from "../../types/employee";


import {
  getEmployees,
} from "../../services/api/employeeApi";


import {
  saveAttendance,
} from "../../services/api/attendanceApi";





function AttendancePage() {



  const {

    attendance,

    updateAttendance,

    deleteAttendance,

    refreshAttendance,

  } = useAttendance();






  const [employees,setEmployees] =
    useState<Employee[]>([]);



  const [selectedEmployee,setSelectedEmployee] =
    useState("");



  const [attendanceDate,setAttendanceDate] =
    useState("");



  const [attendanceStatus,setAttendanceStatus] =
    useState("Present");



  const [searchTerm,setSearchTerm] =
    useState("");



  const [department,setDepartment] =
    useState("");



  const [status,setStatus] =
    useState("");









  useEffect(()=>{


    setEmployees(
      getEmployees()
    );


  },[]);









  const selectedDate =

    attendanceDate ||

    new Date()
      .toISOString()
      .split("T")[0];









  const availableEmployees =

    employees.filter(

      (employee)=>

        !attendance.some(

          (record)=>

            record.employeeId === employee.id &&

            record.date === selectedDate

        )

    );









  const handleAddAttendance = () => {



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







    const newAttendance: Attendance = {


      id:

        Date.now()
          .toString(),



      employeeId:

        employee.id,



      employeeName:

        employee.name,



      department:

        employee.department,



      date:

        selectedDate,



      status:

        attendanceStatus as Attendance["status"],


    };







    saveAttendance(

      newAttendance

    );





    refreshAttendance();







    setSelectedEmployee("");

    setAttendanceDate("");

    setAttendanceStatus("Present");


  };









  const filteredAttendance =

    attendance.filter(

      (item)=>{


        const search =

          searchTerm.toLowerCase();





        const matchesSearch =


          item.employeeId
            .toLowerCase()
            .includes(search)


          ||

          item.employeeName
            .toLowerCase()
            .includes(search);







        const matchesDepartment =


          department === ""


          ||


          item.department === department;







        const matchesStatus =


          status === ""


          ||


          item.status === status;







        return (

          matchesSearch

          &&

          matchesDepartment

          &&

          matchesStatus

        );


      }

    );









  const handleUpdate = (

    item: Attendance

  )=>{


    updateAttendance(item);


  };









  const handleDelete = (

    id:string

  )=>{


    deleteAttendance(id);


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
          max-w-7xl
          mx-auto
          px-6
        "

      >



        <div
          className="
            text-center
            mb-12
          "
        >

          <h1
            className="
              text-4xl
              font-extrabold
              text-gray-900
            "
          >

            Attendance Management

          </h1>


          <p
            className="
              text-gray-600
              mt-3
            "
          >

            Manage employee attendance records.

          </p>


        </div>









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

            Mark Attendance

          </h2>







          <div

            className="
              grid
              md:grid-cols-4
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

                  (emp)=>(


                    <option

                      key={emp.id}

                      value={emp.id}

                    >

                      {emp.name}

                    </option>


                  )

                )

              }



            </select>









            <input


              type="date"



              value={attendanceDate}



              onChange={(e)=>

                setAttendanceDate(
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









            <select


              value={attendanceStatus}



              onChange={(e)=>

                setAttendanceStatus(
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









            <button


              onClick={handleAddAttendance}



              className="
                bg-blue-600
                text-white
                rounded-lg
                font-semibold
                hover:bg-blue-700
              "


            >

              Mark

            </button>



          </div>


        </div>









        <AttendanceSummary

          attendance={attendance}

        />








        <AttendanceFilters

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








        <AttendanceTable

          attendance={filteredAttendance}



          onUpdate={handleUpdate}



          onDelete={handleDelete}


        />




      </div>


    </section>


  );

}




export default AttendancePage;