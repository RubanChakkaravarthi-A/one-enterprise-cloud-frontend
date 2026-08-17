import type {
  LeaveRequest,
  LeaveStatus,
} from "../../types/leave";


import Badge from "../common/Badge";

import Button from "../common/Button";

import EmptyState from "../common/EmptyState";





interface LeaveTableProps {


  leaves: LeaveRequest[];


  onStatusChange: (

    id:string,

    status:LeaveStatus

  ) => void;



  onDelete: (

    id:string

  ) => void;


}









function LeaveTable({

  leaves,

  onStatusChange,

  onDelete,

}:LeaveTableProps) {







  const getStatusVariant = (

    status: LeaveStatus

  ) => {


    switch(status){


      case "Approved":

        return "success";


      case "Rejected":

        return "danger";


      case "Cancelled":

        return "default";


      case "Pending":

        return "warning";


      default:

        return "default";


    }


  };









  const handleDelete = (

    id:string

  )=>{


    const confirmDelete =

      window.confirm(

        "Are you sure you want to delete this leave request?"

      );



    if(confirmDelete){


      onDelete(id);


    }


  };









  return (


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





      {

        leaves.length === 0

        ?

        (

          <EmptyState

            title="No Leave Requests"

            message="No employee leave requests are available."

          />

        )


        :


        (

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

                Status

              </th>



              <th className="px-6 py-4">

                Action

              </th>


            </tr>


          </thead>









          <tbody>


          {

            leaves.map(

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


                    <p

                      className="
                        font-semibold
                        text-gray-800
                      "

                    >

                      {leave.employeeName}

                    </p>



                    <p

                      className="
                        text-sm
                        text-gray-500
                      "

                    >

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









                  <td className="px-6 py-4">



                    <Badge

                      variant={

                        getStatusVariant(

                          leave.status

                        )

                      }

                    >

                      {leave.status}

                    </Badge>



                  </td>









                  <td className="px-6 py-4">


                    <div

                      className="
                        flex
                        items-center
                        gap-3
                      "

                    >





                      <select


                        value={leave.status}


                        onChange={(event)=>

                          onStatusChange(

                            leave.id,

                            event.target.value as LeaveStatus

                          )

                        }


                        className="
                          h-10
                          px-3
                          rounded-lg
                          border
                          border-gray-300
                          bg-white
                          outline-none
                          focus:ring-2
                          focus:ring-blue-500
                        "


                      >


                        <option value="Pending">

                          Pending

                        </option>



                        <option value="Approved">

                          Approved

                        </option>



                        <option value="Rejected">

                          Rejected

                        </option>



                        <option value="Cancelled">

                          Cancelled

                        </option>



                      </select>








                      <Button

                        variant="danger"

                        onClick={()=>


                          handleDelete(

                            leave.id

                          )


                        }

                      >

                        Delete

                      </Button>





                    </div>


                  </td>








                </tr>


              )

            )

          }


          </tbody>




        </table>


        </div>

        )


      }



    </div>


  );

}





export default LeaveTable;