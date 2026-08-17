import useEmployees from "../hooks/useEmployees";
import useAttendance from "../hooks/useAttendance";
import useLeave from "../hooks/useLeave";


function Dashboard() {


  const {
    employees,
  } = useEmployees();



  const {
    attendance,
  } = useAttendance();



  const {
    leaveRequests,
  } = useLeave();





  const today =

    new Date()
      .toISOString()
      .split("T")[0];





  const totalEmployees =

    employees.length;





  const presentToday =

    attendance.filter(

      (item)=>

        item.date === today &&

        item.status === "Present"

    ).length;






  const employeesOnLeave =

    leaveRequests.filter(

      (leave)=>

        leave.status === "Approved"

    ).length;







  const pendingLeaves =

    leaveRequests.filter(

      (leave)=>

        leave.status === "Pending"

    ).length;






  const totalDepartments =

    new Set(

      employees.map(

        (employee)=>

          employee.department

      )

    ).size;







  const cards = [


    {

      title:"Total Employees",

      value:totalEmployees,

      color:"text-blue-600",

    },


    {

      title:"Present Today",

      value:presentToday,

      color:"text-green-600",

    },


    {

      title:"Employees On Leave",

      value:employeesOnLeave,

      color:"text-orange-500",

    },


    {

      title:"Pending Leaves",

      value:pendingLeaves,

      color:"text-purple-600",

    },


  ];







  return (

    <div

      className="
        min-h-screen
        bg-gradient-to-br
        from-blue-50
        to-indigo-50
        p-8
      "

    >



      <div className="mb-8">


        <h1

          className="
            text-3xl
            font-extrabold
            text-gray-900
          "

        >

          Dashboard

        </h1>



        <p className="text-gray-600 mt-2">

          Welcome to One Enterprise Cloud.

        </p>



      </div>







      <div

        className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
        "

      >



        {

          cards.map(

            (card)=>(


              <div

                key={card.title}

                className="
                  bg-white/80
                  backdrop-blur-xl
                  rounded-2xl
                  p-6
                  shadow-lg
                  border
                  border-white
                "

              >


                <p className="text-gray-500">

                  {card.title}

                </p>



                <h2

                  className={`
                    text-3xl
                    font-bold
                    mt-2
                    ${card.color}
                  `}

                >

                  {card.value}

                </h2>



              </div>


            )

          )

        }



      </div>







      <div

        className="
          mt-10
          bg-white/80
          backdrop-blur-xl
          rounded-2xl
          p-6
          shadow-lg
          border
          border-white
        "

      >


        <h2

          className="
            text-xl
            font-bold
            mb-4
          "

        >

          Organization Summary

        </h2>




        <p className="text-gray-700">

          Total Departments:

          <span className="font-bold ml-2">

            {totalDepartments}

          </span>


        </p>



      </div>




    </div>

  );

}


export default Dashboard;