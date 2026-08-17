import { NavLink } from "react-router-dom";


function Sidebar() {

  const menuItems = [

    {
      name: "Dashboard",
      path: "/dashboard",
    },

    {
      name: "Employees",
      path: "/dashboard/employees",
    },

    {
      name: "Attendance",
      path: "/dashboard/attendance",
    },

    {
      name: "Leave Management",
      path: "/dashboard/leave",
    },

    {
      name: "Leave Approval",
      path: "/dashboard/leave-approval",
    },

    {
      name: "Payroll",
      path: "/dashboard/payroll",
    },

    {
      name: "CRM",
      path: "/dashboard/crm",
    },

    {
      name: "Finance",
      path: "/dashboard/finance",
    },

    {
      name: "Reports",
      path: "/dashboard/reports",
    },

    {
      name: "Settings",
      path: "/dashboard/settings",
    },

  ];



  return (

    <aside
      className="
        w-64
        min-h-screen
        bg-white/80
        backdrop-blur-xl
        border-r
        border-gray-200
        shadow-lg
        p-6
      "
    >


      {/* Logo */}

      <div className="mb-10">

        <h1
          className="
            text-2xl
            font-extrabold
            text-blue-600
          "
        >
          ☁️ One Enterprise Cloud
        </h1>


        <p
          className="
            text-sm
            text-gray-500
            mt-1
          "
        >
          Enterprise Platform
        </p>


      </div>





      {/* Navigation */}

      <nav
        className="
          flex
          flex-col
          gap-3
        "
      >

        {
          menuItems.map((item) => (

            <NavLink

              key={item.name}

              to={item.path}

              end={
                item.path === "/dashboard"
              }


              className={({isActive}) =>

                isActive

                ?

                `
                px-4
                py-3
                rounded-xl
                font-semibold
                bg-blue-600
                text-white
                shadow-md
                transition
                `

                :

                `
                px-4
                py-3
                rounded-xl
                font-semibold
                text-gray-700
                hover:bg-blue-50
                hover:text-blue-600
                transition
                `

              }

            >

              {item.name}

            </NavLink>


          ))
        }


      </nav>


    </aside>

  );

}


export default Sidebar;