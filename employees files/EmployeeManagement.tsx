import { useEffect, useState } from "react";
import "./EmployeeManagement.css";

import type { Employee } from "../../types/employee";

import EmployeeForm from "./EmployeeForm";
import EmployeeTable from "./EmployeeTable";

import { Link } from "react-router-dom";

import {
  getEmployees,
  addEmployee as saveNewEmployee,
  updateEmployee as saveUpdatedEmployee,
  deleteEmployee as removeEmployee
} from "../storageService";


type ManagedEmployee = Employee & {

  phone?: string;

  joiningDate?: string;

  status?: string;

  photo?: string;

};



const EmployeeManagement = () => {


const [employees,setEmployees] =
useState<ManagedEmployee[]>([]);



const [editingEmployee,setEditingEmployee] =
useState<ManagedEmployee | null>(null);





/* LOAD EMPLOYEES */

useEffect(()=>{


const data = getEmployees();


setEmployees(data);



},[]);





/* ADD EMPLOYEE */


const addEmployee = (
employee:ManagedEmployee
)=>{


const updated =
saveNewEmployee(employee);



setEmployees(updated);



saveAudit(
"Created",
employee.name,
"New employee added"
);



};





/* UPDATE EMPLOYEE */


const updateEmployee = (
employee:ManagedEmployee
)=>{


const updated =
saveUpdatedEmployee(employee);



setEmployees(updated);



saveAudit(
"Updated",
employee.name,
"Employee information updated"
);



setEditingEmployee(null);


};






/* DELETE EMPLOYEE */


const deleteEmployee = (
id:string
)=>{


const employee =
employees.find(
(emp)=>emp.id===id
);



const confirmDelete =
window.confirm(
"Are you sure you want to delete this employee?"
);



if(!confirmDelete)
return;




const updated =
removeEmployee(id);



setEmployees(updated);



if(employee){


saveAudit(
"Deleted",
employee.name,
"Employee removed"
);


}



};






/* AUDIT */


const saveAudit = (
action:string,
employee:string,
details:string
)=>{


const oldAudit =
JSON.parse(
localStorage.getItem("employeeAudit")
||
"[]"
);



const newAudit={

id:Date.now().toString(),

action,

employee,

details,

date:new Date()
.toLocaleDateString()

};



localStorage.setItem(

"employeeAudit",

JSON.stringify([
...oldAudit,
newAudit
])

);


};







return(


<section className="employee-management-section">


<div className="container">





<div className="employee-management-title">


<div className="employee-header-row">



<div>

<h1>
Employee Management
</h1>


<p>
Create, view, update and delete employees.
</p>


</div>




<Link

to="/employees/directory"

className="directory-btn"

>

View Employee Directory

</Link>



</div>


</div>





<div className="employee-count">

Total Employees : {employees.length}

</div>







{
!editingEmployee ?


<EmployeeForm

onAddEmployee={addEmployee}

/>


:

<div className="employee-form-card">


<div className="employee-form-header">


<h2>
Edit Employee
</h2>


<p>
Update employee information below.
</p>


</div>





<form

onSubmit={(event)=>{


event.preventDefault();



const form =
event.currentTarget;



const data =
new FormData(form);




const updatedEmployee:ManagedEmployee={


id:data.get("id") as string,


name:data.get("name") as string,


email:data.get("email") as string,


department:data.get("department") as string,


designation:data.get("designation") as string,


phone:data.get("phone") as string,


joiningDate:
data.get("joiningDate") as string,


status:
data.get("status") as string,


photo:
editingEmployee.photo


};




updateEmployee(updatedEmployee);



}}

>




<div className="employee-form-grid">


<div className="form-group">

<label>
Employee ID
</label>


<input

name="id"

defaultValue={
editingEmployee.id
}

readOnly

/>

</div>





<div className="form-group">

<label>
Full Name
</label>


<input

name="name"

defaultValue={
editingEmployee.name
}

/>


</div>





<div className="form-group">


<label>
Email
</label>


<input

name="email"

defaultValue={
editingEmployee.email
}

/>


</div>






<div className="form-group">


<label>
Phone
</label>


<input

name="phone"

defaultValue={
editingEmployee.phone || ""
}

/>


</div>






<div className="form-group">

<label>
Department
</label>


<select

name="department"

defaultValue={
editingEmployee.department
}

>


<option>
HR
</option>


<option>
Development
</option>


<option>
Finance
</option>


<option>
CRM
</option>


</select>


</div>






<div className="form-group">

<label>
Designation
</label>


<input

name="designation"

defaultValue={
editingEmployee.designation
}

/>


</div>







<div className="form-group">

<label>
Date of Joining
</label>


<input

type="date"

name="joiningDate"

defaultValue={
editingEmployee.joiningDate || ""
}

/>


</div>







<div className="form-group">

<label>
Status
</label>


<select

name="status"

defaultValue={
editingEmployee.status || "Active"
}

>


<option>
Active
</option>


<option>
Inactive
</option>


</select>


</div>






</div>






<button

className="add-employee-btn"

>

Update Employee

</button>





<button

type="button"

onClick={()=>
setEditingEmployee(null)
}

>

Cancel

</button>





</form>



</div>



}








<EmployeeTable

employees={employees}

onEdit={setEditingEmployee}

onDelete={deleteEmployee}

/>






</div>


</section>


);


};



export default EmployeeManagement;