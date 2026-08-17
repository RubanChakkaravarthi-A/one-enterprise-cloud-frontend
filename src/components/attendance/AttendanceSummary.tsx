import type { Attendance } from "../../types/attendance";


interface AttendanceSummaryProps {

  attendance: Attendance[];

}



function AttendanceSummary({
  attendance
}: AttendanceSummaryProps) {



  const total =
    attendance.length;



  const present =
    attendance.filter(
      (item) =>
        item.status === "Present"
    ).length;



  const absent =
    attendance.filter(
      (item) =>
        item.status === "Absent"
    ).length;



  const halfDay =
    attendance.filter(
      (item) =>
        item.status === "Half Day"
    ).length;



  const wfh =
    attendance.filter(
      (item) =>
        item.status === "WFH"
    ).length;





  const cards = [

    {
      title: "Total",
      value: total,
    },

    {
      title: "Present",
      value: present,
    },

    {
      title: "Absent",
      value: absent,
    },

    {
      title: "Half Day",
      value: halfDay,
    },

    {
      title: "WFH",
      value: wfh,
    },

  ];







  return (

    <div
      className="
        grid
        md:grid-cols-5
        gap-6
        mb-8
      "
    >

      {
        cards.map((card) => (

            <div
              key={card.title}
              className="
                bg-white/80
                backdrop-blur-xl
                rounded-2xl
                shadow-lg
                border
                border-white
                p-6
                text-center
              "
            >

              <h3
                className="
                  text-gray-500
                  font-semibold
                  mb-2
                "
              >
                {card.title}
              </h3>


              <p
                className="
                  text-3xl
                  font-extrabold
                  text-blue-600
                "
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


export default AttendanceSummary;