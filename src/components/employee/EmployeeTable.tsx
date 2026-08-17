import type {
  Employee,
} from "../../types/employee";


import Badge from "../common/Badge";

import Button from "../common/Button";

import EmptyState from "../common/EmptyState";





interface EmployeeTableProps {


  employees: Employee[];


  onEdit: (

    employee: Employee

  ) => void;



  onDelete: (

    employeeId:string

  ) => void;


}









function EmployeeTable({

  employees,

  onEdit,

  onDelete,

}: EmployeeTableProps) {







  const handleDelete = (

    employeeId:string

  ) => {


    const confirmed =

      window.confirm(

        "Are you sure you want to delete this employee?"

      );



    if(confirmed){


      onDelete(employeeId);


    }


  };









  const getStatusVariant = (

    status?:string

  ) => {


    switch(status){


      case "Active":

        return "success";


      case "Inactive":

        return "danger";


      case "On Leave":

        return "warning";


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
        shadow-xl
        border
        border-white
        overflow-hidden
      "

    >






      <div className="p-6">


        <h2

          className="
            text-2xl
            font-bold
            text-gray-900
          "

        >

          Employee List

        </h2>




        <p className="text-gray-600 mt-2">

          Manage registered employee records.

        </p>



      </div>









      {

        employees.length === 0

        ?

        (

          <EmptyState

            title="No Employees Found"

            message="Employee records are not available."

          />

        )


        :


        (

        <div className="overflow-x-auto">



          <table className="w-full">



            <thead

              className="
                bg-blue-50
              "

            >


              <tr>


                <th className="px-6 py-4 text-left font-semibold text-gray-700">

                  Employee ID

                </th>



                <th className="px-6 py-4 text-left font-semibold text-gray-700">

                  Name

                </th>



                <th className="px-6 py-4 text-left font-semibold text-gray-700">

                  Department

                </th>



                <th className="px-6 py-4 text-left font-semibold text-gray-700">

                  Designation

                </th>



                <th className="px-6 py-4 text-left font-semibold text-gray-700">

                  Email

                </th>



                <th className="px-6 py-4 text-left font-semibold text-gray-700">

                  Phone

                </th>



                <th className="px-6 py-4 text-left font-semibold text-gray-700">

                  Joining Date

                </th>



                <th className="px-6 py-4 text-left font-semibold text-gray-700">

                  Status

                </th>



                <th className="px-6 py-4 text-left font-semibold text-gray-700">

                  Actions

                </th>



              </tr>


            </thead>









            <tbody>


              {

                employees.map(

                  (employee,index)=>(


                    <tr

                      key={`${employee.id}-${index}`}

                      className="
                        border-t
                        border-gray-100
                        hover:bg-gray-50
                        transition
                      "

                    >






                      <td className="px-6 py-4 text-gray-700">

                        {employee.id}

                      </td>







                      <td className="px-6 py-4 font-semibold text-gray-900">

                        {employee.name}

                      </td>







                      <td className="px-6 py-4 text-gray-700">

                        {employee.department}

                      </td>







                      <td className="px-6 py-4 text-gray-700">

                        {employee.designation}

                      </td>







                      <td className="px-6 py-4 text-gray-700">

                        {employee.email}

                      </td>







                      <td className="px-6 py-4 text-gray-700">

                        {employee.mobile || "N/A"}

                      </td>







                      <td className="px-6 py-4 text-gray-700">

                        {employee.joiningDate || "N/A"}

                      </td>







                      <td className="px-6 py-4">


                        <Badge

                          variant={

                            getStatusVariant(

                              employee.status

                            )

                          }

                        >

                          {

                            employee.status ||

                            "Inactive"

                          }

                        </Badge>



                      </td>









                      <td className="px-6 py-4">


                        <div

                          className="
                            flex
                            gap-3
                          "

                        >




                          <Button

                            variant="primary"

                            onClick={()=>


                              onEdit(

                                employee

                              )


                            }

                          >

                            Edit

                          </Button>








                          <Button

                            variant="danger"

                            onClick={()=>


                              handleDelete(

                                employee.id

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





export default EmployeeTable;