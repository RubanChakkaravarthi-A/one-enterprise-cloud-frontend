import EmployeeRow from "./EmployeeRow";


type ManagedEmployee = {

  id:string;

  name:string;

  email:string;

  department:string;

  designation:string;

  phone?:string;

  joiningDate?:string;

  status?:string;

  photo?:string;

};



interface EmployeeTableProps {


  employees:ManagedEmployee[];

  onEdit:(employee:ManagedEmployee)=>void;

  onDelete:(id:string)=>void;


}




const EmployeeTable = ({

employees,

onEdit,

onDelete

}:EmployeeTableProps)=>{


return(


<div className="employee-table-section">



<div className="employee-table-header">


<h2>
Employee List
</h2>


<div className="employee-count">

Total Employees : {employees.length}

</div>


</div>






<div className="employee-table-container">



<table className="employee-table">



<thead>


<tr>


<th>
Employee ID
</th>


<th>
Name
</th>


<th>
Department
</th>


<th>
Designation
</th>


<th>
Email
</th>


<th>
Phone
</th>


<th>
Joining Date
</th>


<th>
Status
</th>


<th>
Actions
</th>


</tr>


</thead>






<tbody>



{

employees.length === 0 ?



<tr>


<td

colSpan={9}

className="no-employees"

>

No Employees Found

</td>


</tr>



:



employees.map((employee)=>(



<EmployeeRow


key={employee.id}


employee={employee}


onEdit={onEdit}


onDelete={onDelete}


/>



))


}





</tbody>





</table>




</div>




</div>



);


};


export default EmployeeTable;