import type {
  Employee,
} from "../../types/employee";


import Badge from "../common/Badge";





interface EmployeeCardProps {


  employee: Employee;


  onSelect: (

    employee: Employee

  ) => void;


}









function EmployeeCard({

  employee,

  onSelect,

}: EmployeeCardProps) {







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



      onClick={()=>


        onSelect(employee)


      }



      className="
        bg-white/70
        backdrop-blur-xl
        rounded-3xl
        p-6
        shadow-lg
        border
        border-white
        hover:scale-105
        transition
        cursor-pointer
      "



    >





      <div

        className="
          flex
          justify-between
          items-start
          mb-4
        "

      >



        <div>


          <h2

            className="
              text-2xl
              font-bold
              text-blue-600
            "

          >

            {employee.name}

          </h2>




          <p

            className="
              text-gray-600
              mt-2
            "

          >

            {employee.designation}

          </p>


        </div>





        {

          employee.status &&

          (

            <Badge

              variant={

                getStatusVariant(

                  employee.status

                )

              }

            >

              {employee.status}

            </Badge>

          )

        }



      </div>









      <div

        className="
          mt-4
          space-y-3
          text-gray-700
        "

      >



        <p>

          <span className="font-semibold">

            Employee ID:

          </span>{" "}

          {employee.id}


        </p>







        <p>

          <span className="font-semibold">

            Department:

          </span>{" "}

          {employee.department}


        </p>







        <p>

          <span className="font-semibold">

            Email:

          </span>{" "}

          {employee.email}


        </p>





      </div>







    </div>


  );

}





export default EmployeeCard;