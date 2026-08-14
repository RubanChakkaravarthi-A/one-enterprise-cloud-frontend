import { useEffect, useState } from "react";

import type { Employee } from "../../types/employee";

import { getEmployees } from "../../services/storageService";


type AttendanceRecord = {

  id:string;

  status:string;

  date:string;

};



const AttendanceDashboard = () => {


const [employees,setEmployees] =
useState<Employee[]>([]);


const [attendance,setAttendance] =
useState<AttendanceRecord[]>([]);


const [search,setSearch] =
useState("");


const [department,setDepartment] =
useState("All");


const [statusFilter,setStatusFilter] =
useState("All");


const [currentDate,setCurrentDate] =
useState("");





useEffect(()=>{


setEmployees(
getEmployees()
);



const savedAttendance =
JSON.parse(
localStorage.getItem("attendance") || "[]"
);


setAttendance(savedAttendance);



setCurrentDate(
new Date().toLocaleDateString()
);



},[]);






const saveAttendance = (
data:AttendanceRecord[]
)=>{


setAttendance(data);


localStorage.setItem(
"attendance",
JSON.stringify(data)
);


};







const markAttendance = (

id:string,

status:string

)=>{


if(!status){

alert("Select Status");

return;

}



const exists =
attendance.find(
(item)=>item.id===id
);



if(exists){

alert(
"Already marked. Use Update"
);

return;

}



saveAttendance([

...attendance,

{

id,

status,

date:new Date()
.toLocaleDateString()

}

]);


};







const updateAttendance = (

id:string,

status:string

)=>{


if(!status){

alert("Select Status");

return;

}



const updated =

attendance.map(

(item)=>

item.id===id

?

{

...item,

status,

date:new Date()
.toLocaleDateString()

}

:

item

);



saveAttendance(updated);


};







const resetAttendance=(id:string)=>{


const updated =

attendance.filter(

(item)=>

item.id!==id

);



saveAttendance(updated);


};









const filteredEmployees =

employees.filter((employee)=>{


const keyword =
search.toLowerCase();



const searchMatch =

employee.name
.toLowerCase()
.includes(keyword)

||

employee.id
.toLowerCase()
.includes(keyword);



const deptMatch =

department==="All"

||

employee.department===department;




const record =
attendance.find(

(item)=>

item.id===employee.id

);



const statusMatch =

statusFilter==="All"

||

record?.status===statusFilter;




return (

searchMatch &&

deptMatch &&

statusMatch

);


});







const totalEmployees =
employees.length;


const present =
attendance.filter(
(item)=>item.status==="Present"
).length;


const absent =
attendance.filter(
(item)=>item.status==="Absent"
).length;


const halfDay =
attendance.filter(
(item)=>item.status==="Half Day"
).length;


const wfh =
attendance.filter(
(item)=>item.status==="Work From Home"
).length;








return (


<div className="
min-h-screen
bg-gradient-to-br
from-blue-50
via-white
to-indigo-50
p-8
">






<div className="
bg-white
rounded-3xl
shadow-lg
p-8
mb-8
flex
justify-between
items-center
">


<div>

<h1 className="
text-3xl
font-bold
text-blue-600
">

📅 Attendance Dashboard

</h1>


<p className="
text-gray-500
mt-2
">

Employee Attendance Management System

</p>

</div>





<div className="
bg-blue-50
px-6
py-4
rounded-xl
text-center
">


<h3 className="
font-bold
">

Administrator

</h3>


<p className="
text-gray-500
text-sm
">

System Admin

</p>


</div>



</div>









<div className="
grid
grid-cols-1
md:grid-cols-5
gap-5
mb-8
">


{

[

["Total Employees",totalEmployees],

["Present",present],

["Absent",absent],

["Half Day",halfDay],

["WFH",wfh]

].map(

(item)=>(


<div

key={item[0]}

className="
bg-white
rounded-2xl
shadow
p-6
text-center
"


>


<h2 className="
text-3xl
font-bold
text-blue-600
">

{item[1]}

</h2>


<p className="
text-gray-600
mt-2
">

{item[0]}

</p>


</div>


)


)

}


</div>








<div className="
bg-white
rounded-2xl
shadow
p-5
mb-6
">


<p className="
font-semibold
">

Date :

<span className="
text-blue-600
ml-2
">

{currentDate}

</span>


</p>


</div>









<div className="
bg-white
rounded-2xl
shadow
p-5
mb-6
grid
md:grid-cols-3
gap-4
">


<input

className="
border
rounded-xl
p-3
"

placeholder="Search Employee"

value={search}

onChange={(e)=>
setSearch(e.target.value)
}

/>





<select

className="
border
rounded-xl
p-3
"

value={department}

onChange={(e)=>
setDepartment(e.target.value)
}

>

<option>
All
</option>


{

[...new Set(
employees.map(
(emp)=>emp.department
)
)]

.map(dep=>(

<option key={dep}>

{dep}

</option>

))


}


</select>






<select

className="
border
rounded-xl
p-3
"

value={statusFilter}

onChange={(e)=>
setStatusFilter(e.target.value)
}

>

<option>
All
</option>

<option>
Present
</option>

<option>
Absent
</option>

<option>
Half Day
</option>

<option>
Work From Home
</option>


</select>




</div>










<div className="
bg-white
rounded-2xl
shadow
p-6
overflow-x-auto
">


<h2 className="
text-xl
font-bold
mb-5
">

Employee Attendance

</h2>





<table className="
w-full
">


<thead>

<tr className="
border-b
">


<th className="p-3 text-left">
ID
</th>


<th className="p-3 text-left">
Name
</th>


<th className="p-3 text-left">
Department
</th>


<th className="p-3">
Status
</th>


<th className="p-3">
Action
</th>


</tr>


</thead>



<tbody>


{

filteredEmployees.map(employee=>{


const record =
attendance.find(
(item)=>item.id===employee.id
);



return (

<tr
key={employee.id}
className="
border-b
">


<td className="p-3">
{employee.id}
</td>


<td className="p-3">
{employee.name}
</td>


<td className="p-3">
{employee.department}
</td>



<td className="p-3">


<select

id={`status-${employee.id}`}

className="
border
rounded-lg
p-2
"


defaultValue={
record?.status || ""
}


>


<option value="">
Select
</option>


<option>
Present
</option>


<option>
Absent
</option>


<option>
Half Day
</option>


<option>
Work From Home
</option>


</select>


</td>





<td className="
p-3
space-x-2
">


<button

className="
bg-green-500
text-white
px-3
py-2
rounded-lg
"

onClick={()=>{


const select =
document.getElementById(
`status-${employee.id}`
) as HTMLSelectElement;


markAttendance(
employee.id,
select.value
);


}}

>

Mark

</button>





<button

className="
bg-blue-500
text-white
px-3
py-2
rounded-lg
"


onClick={()=>{


const select =
document.getElementById(
`status-${employee.id}`
) as HTMLSelectElement;


updateAttendance(
employee.id,
select.value
);


}}

>

Update

</button>





<button

className="
bg-red-500
text-white
px-3
py-2
rounded-lg
"


onClick={()=>resetAttendance(employee.id)}

>

Reset

</button>


</td>


</tr>


);


})


}


</tbody>


</table>


</div>





</div>


);


};


export default AttendanceDashboard;