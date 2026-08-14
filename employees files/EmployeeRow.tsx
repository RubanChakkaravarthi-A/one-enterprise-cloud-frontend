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



interface EmployeeRowProps {


employee:ManagedEmployee;


onEdit:(employee:ManagedEmployee)=>void;


onDelete:(id:string)=>void;


}




const EmployeeRow = ({

employee,

onEdit,

onDelete

}:EmployeeRowProps)=>{


return(


<tr>


<td>
{employee.id}
</td>



<td>


<div className="employee-name-cell">


{

employee.photo &&

<img

src={employee.photo}

alt={employee.name}

className="employee-photo"

/>


}



<span>

{employee.name}

</span>


</div>


</td>





<td>
{employee.department}
</td>





<td>
{employee.designation}
</td>





<td>
{employee.email}
</td>





<td>

{
employee.phone || "-"
}

</td>





<td>

{

employee.joiningDate

?

employee.joiningDate

:

"-"

}


</td>






<td>


<span

className={

employee.status === "Inactive"

?

"employee-status inactive"

:

"employee-status active"

}

>


{

employee.status || "Active"

}


</span>


</td>






<td>



<div className="employee-action-buttons">



<button


className="employee-edit-btn"


onClick={()=>
onEdit(employee)
}


>

Edit

</button>






<button


className="employee-delete-btn"


onClick={()=>
onDelete(employee.id)
}


>

Delete

</button>





</div>



</td>





</tr>



);


};



export default EmployeeRow;