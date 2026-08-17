import useLeave from "../../hooks/useLeave";


import type {
  LeaveStatus,
} from "../../types/leave";







function LeaveApproval() {



  const {

    leaveRequests,

    changeLeaveStatus,

  } = useLeave();







  const pendingLeaves =

    leaveRequests.filter(

      (leave)=>

        leave.status === "Pending"

    );









  const handleStatus = (

    id:string,

    status:LeaveStatus

  )=>{



    const message =

      status === "Approved"

      ?

      "Approve this leave request?"

      :

      status === "Rejected"

      ?

      "Reject this leave request?"

      :

      "Cancel this leave request?";





    const confirmAction =

      window.confirm(message);





    if(confirmAction){


      changeLeaveStatus(

        id,

        status

      );


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

            Leave Approval

          </h1>





          <p

            className="
              text-gray-600
              mt-3
            "

          >

            Review employee leave requests.

          </p>



        </div>









        <div

          className="
            bg-white/80
            backdrop-blur-xl
            rounded-3xl
            shadow-lg
            border
            border-white
            overflow-hidden
          "

        >




        <div className="overflow-x-auto">



          <table

            className="
              w-full
              text-left
            "

          >





            <thead

              className="
                bg-blue-600
                text-white
              "

            >


              <tr>



                <th className="px-6 py-4">
                  Employee
                </th>



                <th className="px-6 py-4">
                  Department
                </th>



                <th className="px-6 py-4">
                  Leave Type
                </th>



                <th className="px-6 py-4">
                  Duration
                </th>



                <th className="px-6 py-4">
                  Days
                </th>



                <th className="px-6 py-4">
                  Reason
                </th>



                <th className="px-6 py-4">
                  Action
                </th>



              </tr>


            </thead>









            <tbody>



            {

            pendingLeaves.length === 0 ?



            (


              <tr>


                <td

                  colSpan={7}

                  className="
                    text-center
                    py-12
                    text-gray-500
                    font-semibold
                  "

                >

                  No pending leave requests.

                </td>


              </tr>



            )



            :



            pendingLeaves.map(



              (leave)=>(



              <tr


                key={leave.id}


                className="
                  border-b
                  hover:bg-blue-50
                  transition
                "


              >





                <td className="px-6 py-4">


                  <p className="font-semibold">

                    {leave.employeeName}

                  </p>


                  <p className="text-sm text-gray-500">

                    {leave.employeeId}

                  </p>


                </td>









                <td className="px-6 py-4">

                  {leave.department}

                </td>









                <td className="px-6 py-4">

                  {leave.leaveType}

                </td>









                <td className="px-6 py-4">


                  {leave.fromDate}

                  <br/>

                  <span className="text-gray-400">
                    to
                  </span>

                  <br/>

                  {leave.toDate}


                </td>









                <td className="px-6 py-4">

                  {leave.totalDays}

                </td>









                <td

                  className="
                    px-6
                    py-4
                    max-w-xs
                  "

                >

                  {leave.reason}


                </td>









                <td className="px-6 py-4">


                  <div

                    className="
                      flex
                      gap-3
                    "

                  >




                  <button


                    onClick={()=>


                      handleStatus(

                        leave.id,

                        "Approved"

                      )


                    }



                    className="
                      px-4
                      py-2
                      rounded-lg
                      bg-green-600
                      text-white
                      font-semibold
                      hover:bg-green-700
                    "


                  >

                    Approve


                  </button>








                  <button


                    onClick={()=>


                      handleStatus(

                        leave.id,

                        "Rejected"

                      )


                    }



                    className="
                      px-4
                      py-2
                      rounded-lg
                      bg-red-500
                      text-white
                      font-semibold
                      hover:bg-red-600
                    "


                  >

                    Reject


                  </button>







                  </div>



                </td>







              </tr>



              )



            )


            }



            </tbody>





          </table>



        </div>



        </div>





      </div>




    </section>


  );

}





export default LeaveApproval;