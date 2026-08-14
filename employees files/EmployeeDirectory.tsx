import { useEffect, useState } from "react";
import type { Employee } from "../../types/employee";
import EmployeeCard from "./EmployeeCard";
import "./employee-directory.css";
import { Link } from "react-router-dom";

import { getEmployees } from "../../services/storageService";


type DirectoryEmployee = Employee & {
  photo?: string;
  phone?: string;
  joiningDate?: string;
  status?: string;
};


const EmployeeDirectory = () => {


const [employees,setEmployees] =
useState<DirectoryEmployee[]>([]);


const [search,setSearch] =
useState("");

const [department,setDepartment] =
useState("All");

const [designation,setDesignation] =
useState("All");

const [status,setStatus] =
useState("All");

const [sort,setSort] =
useState("default");



useEffect(()=>{


const loadEmployees = ()=>{


const data =
getEmployees();


setEmployees(data as DirectoryEmployee[]);


};


loadEmployees();



window.addEventListener(
"storage",
loadEmployees
);



return()=>{


window.removeEventListener(
"storage",
loadEmployees
);


};


},[]);





const filteredEmployees =
employees
.filter((employee)=>{


const keyword =
search.toLowerCase();



const matchSearch =

employee.name
.toLowerCase()
.includes(keyword)

||

employee.id
.toLowerCase()
.includes(keyword);




const matchDepartment =

department==="All"

||

employee.department===department;




const matchDesignation =

designation==="All"

||

employee.designation===designation;




const matchStatus =

status==="All"

||

employee.status===status;



return (

matchSearch &&

matchDepartment &&

matchDesignation &&

matchStatus

);



})

.sort((a,b)=>{


if(sort==="nameAsc")
{
return a.name.localeCompare(b.name);
}



if(sort==="nameDesc")
{
return b.name.localeCompare(a.name);
}



if(sort==="idAsc")
{
return Number(a.id)-Number(b.id);
}



if(sort==="idDesc")
{
return Number(b.id)-Number(a.id);
}



return 0;


});






const resetFilters=()=>{


setSearch("");

setDepartment("All");

setDesignation("All");

setStatus("All");

setSort("default");


};






return(


<>


<header>

<div className="container">


<div className="logo">

☁ One Enterprise Cloud

</div>



<nav>


<Link to="/dashboard">
Dashboard
</Link>


<Link to="/">
Home
</Link>


<Link to="/employees">
Employee Management
</Link>



</nav>



</div>

</header>





<section className="employee-section">


<div className="container">



<div className="title">


<h1>
Employee Directory
</h1>


<p>
Search and manage enterprise employees.
</p>


</div>





<div className="toolbar">


<input

type="text"

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

placeholder="🔍 Search by Name or Employee ID"

/>





<select

value={department}

onChange={(e)=>
setDepartment(e.target.value)
}

>


<option value="All">
All Departments
</option>

<option value="HR">
HR
</option>


<option value="Development">
Development
</option>


<option value="Finance">
Finance
</option>


<option value="CRM">
CRM
</option>


</select>






<select

value={designation}

onChange={(e)=>
setDesignation(e.target.value)
}

>


<option value="All">
All Designations
</option>


<option value="Software Engineer">
Software Engineer
</option>


<option value="Frontend Developer">
Frontend Developer
</option>


<option value="Backend Developer">
Backend Developer
</option>


<option value="HR Executive">
HR Executive
</option>


<option value="HR Manager">
HR Manager
</option>


<option value="Finance Manager">
Finance Manager
</option>


<option value="Accountant">
Accountant
</option>


<option value="CRM Executive">
CRM Executive
</option>



</select>





<select

value={status}

onChange={(e)=>
setStatus(e.target.value)
}

>


<option value="All">
All Status
</option>


<option value="Active">
Active
</option>


<option value="Inactive">
Inactive
</option>



</select>





<select

value={sort}

onChange={(e)=>
setSort(e.target.value)
}

>


<option value="default">
Sort Employees
</option>


<option value="nameAsc">
Name A-Z
</option>


<option value="nameDesc">
Name Z-A
</option>


<option value="idAsc">
ID Ascending
</option>


<option value="idDesc">
ID Descending
</option>


</select>





<button

id="resetBtn"

onClick={resetFilters}

>

Reset Filters

</button>



</div>







<div className="employee-grid">


{

filteredEmployees.length > 0 ?

filteredEmployees.map(employee=>(


<EmployeeCard

key={employee.id}

employee={employee}

/>


))


:

<div className="no-data">

<h2>
No Employees Found
</h2>


<p>
Try changing your search or filters
</p>


</div>


}



</div>




</div>


</section>


</>


);


};


export default EmployeeDirectory;