import type {
  Employee,
} from "../../types/employee";


import Badge from "../common/Badge";





interface EmployeeDetailsProps {


  employee: Employee;


}









function EmployeeDetails({

  employee,

}: EmployeeDetailsProps) {







  const getStatusVariant = (

    status?: string

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
        mt-6
        pt-5
        border-t
        border-gray-200
      "

    >





      <h3

        className="
          text-xl
          font-bold
          text-gray-800
          mb-5
        "

      >

        Employee Details

      </h3>









      <div

        className="
          grid
          md:grid-cols-2
          gap-4
          text-gray-700
        "

      >





        <div>

          <span className="font-semibold">

            Name:

          </span>

          {" "}

          {employee.name}


        </div>







        <div>

          <span className="font-semibold">

            Employee ID:

          </span>

          {" "}

          {employee.id}


        </div>







        <div>

          <span className="font-semibold">

            Department:

          </span>

          {" "}

          {employee.department}


        </div>







        <div>

          <span className="font-semibold">

            Designation:

          </span>

          {" "}

          {employee.designation}


        </div>







        <div>

          <span className="font-semibold">

            Email:

          </span>

          {" "}

          {employee.email}


        </div>







        <div>

          <span className="font-semibold">

            Phone:

          </span>

          {" "}

          {employee.mobile || "N/A"}


        </div>







        <div>

          <span className="font-semibold">

            Joining Date:

          </span>

          {" "}

          {employee.joiningDate || "N/A"}


        </div>








        <div

          className="
            flex
            items-center
            gap-2
          "

        >



          <span className="font-semibold">

            Status:

          </span>





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




        </div>







      </div>







    </div>

  );

}





export default EmployeeDetails;