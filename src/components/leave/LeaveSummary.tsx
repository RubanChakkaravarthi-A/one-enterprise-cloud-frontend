import type {
  LeaveRequest,
} from "../../types/leave";



interface LeaveSummaryProps {

  leaves: LeaveRequest[];

}







function LeaveSummary({

  leaves,

}: LeaveSummaryProps) {





  const cards = [


    {

      title:"Total Requests",

      value:

        leaves.length,

      color:

        "text-blue-600",

      bg:

        "from-blue-50 to-blue-100",

    },





    {

      title:"Pending",

      value:

        leaves.filter(

          (leave)=>

            leave.status === "Pending"

        ).length,

      color:

        "text-yellow-600",

      bg:

        "from-yellow-50 to-yellow-100",

    },





    {

      title:"Approved",

      value:

        leaves.filter(

          (leave)=>

            leave.status === "Approved"

        ).length,

      color:

        "text-green-600",

      bg:

        "from-green-50 to-green-100",

    },





    {

      title:"Rejected",

      value:

        leaves.filter(

          (leave)=>

            leave.status === "Rejected"

        ).length,

      color:

        "text-red-600",

      bg:

        "from-red-50 to-red-100",

    },





    {

      title:"Cancelled",

      value:

        leaves.filter(

          (leave)=>

            leave.status === "Cancelled"

        ).length,

      color:

        "text-gray-600",

      bg:

        "from-gray-50 to-gray-100",

    },


  ];








  return (


    <div

      className="

        grid

        grid-cols-1

        sm:grid-cols-2

        lg:grid-cols-5

        gap-6

        mb-10

      "

    >



      {

        cards.map(

          (card)=>(



            <div


              key={card.title}


              className={`

                bg-gradient-to-br

                ${card.bg}

                backdrop-blur-xl

                rounded-3xl

                shadow-lg

                border

                border-white

                p-6

                text-center

                hover:scale-105

                transition

              `}


            >





              <h3

                className="

                  text-gray-600

                  font-semibold

                  text-sm

                  mb-3

                "

              >

                {card.title}


              </h3>







              <p

                className={`

                  text-4xl

                  font-extrabold

                  ${card.color}

                `}

              >

                {card.value}


              </p>





            </div>



          )

        )

      }



    </div>


  );

}





export default LeaveSummary;