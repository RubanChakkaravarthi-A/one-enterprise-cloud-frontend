import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";


function DashboardLayout() {

  return (

    <div
      className="
        min-h-screen
        flex
        bg-gradient-to-br
        from-blue-50
        via-white
        to-indigo-100
      "
    >

      {/* Sidebar */}

      <Sidebar />



      {/* Main Area */}

      <div
        className="
          flex
          flex-col
          flex-1
          min-h-screen
        "
      >


        {/* Header */}

        <Header />



        {/* Page Content */}

        <main
          className="
            flex-1
            p-8
          "
        >

          <Outlet />

        </main>



        {/* Footer */}

        <Footer />


      </div>


    </div>

  );

}


export default DashboardLayout;