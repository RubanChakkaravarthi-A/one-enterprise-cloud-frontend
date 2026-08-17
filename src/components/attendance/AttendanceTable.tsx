import type {
  Attendance,
  AttendanceStatus,
} from "../../types/attendance";


import Badge from "../common/Badge";

import Button from "../common/Button";

import EmptyState from "../common/EmptyState";





interface AttendanceTableProps {


  attendance: Attendance[];


  onUpdate: (

    attendance: Attendance

  ) => void;



  onDelete: (

    id:string

  ) => void;


}







function AttendanceTable({

  attendance,

  onUpdate,

  onDelete,

}: AttendanceTableProps) {





  const handleStatusChange = (

    item: Attendance,

    status: AttendanceStatus

  ) => {



    onUpdate({

      ...item,

      status,

    });


  };









  const getStatusVariant = (

    status: AttendanceStatus

  ) => {


    switch(status){


      case "Present":

        return "success";


      case "Absent":

        return "danger";


      case "Half Day":

        return "warning";


      case "WFH":

        return "info";


      default:

        return "default";


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

        attendance.length === 0

        ?

        (

          <EmptyState

            title="No Attendance Records"

            message="Attendance records are not available."

          />

        )


        :


        (

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

                  Employee ID

                </th>



                <th className="px-6 py-4">

                  Name

                </th>



                <th className="px-6 py-4">

                  Department

                </th>



                <th className="px-6 py-4">

                  Date

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

                attendance.map(

                  (item)=>(


                    <tr

                      key={item.id}

                      className="
                        border-b
                        hover:bg-blue-50
                      "

                    >




                      <td className="px-6 py-4">

                        {item.employeeId}

                      </td>







                      <td className="px-6 py-4">

                        {item.employeeName}

                      </td>







                      <td className="px-6 py-4">

                        {item.department}

                      </td>







                      <td className="px-6 py-4">

                        {item.date}

                      </td>







                      <td className="px-6 py-4">



                        <div className="mb-2">


                          <Badge

                            variant={

                              getStatusVariant(

                                item.status

                              )

                            }

                          >

                            {item.status}

                          </Badge>



                        </div>







                        <select


                          value={item.status}


                          onChange={(event)=>

                            handleStatusChange(

                              item,

                              event.target.value as AttendanceStatus

                            )

                          }


                          className="
                            px-3
                            py-2
                            rounded-lg
                            border
                            border-gray-300
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



                      </td>









                      <td className="px-6 py-4">



                        <div className="flex gap-3">





                          <Button

                            variant="primary"

                            onClick={()=>


                              onUpdate(item)


                            }

                          >

                            Update

                          </Button>









                          <Button

                            variant="danger"

                            onClick={()=>{


                              const confirmDelete =

                                window.confirm(

                                  "Are you sure you want to delete this attendance record?"

                                );



                              if(confirmDelete){


                                onDelete(

                                  item.id

                                );


                              }



                            }}

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

        )

      }





    </div>


  );

}




export default AttendanceTable;