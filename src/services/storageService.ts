import type { Employee } from "../types/employee";


export type StoredEmployee = Employee & {

  phone?: string;

  joiningDate?: string;

  status?: string;

  photo?: string;

};



const EMPLOYEE_KEY = "employees";





export const getEmployees = (): StoredEmployee[] => {


  const storedEmployees =
    localStorage.getItem(EMPLOYEE_KEY);



  if(!storedEmployees){

    return [];

  }



  try{


    return JSON.parse(storedEmployees);


  }catch(error){


    console.error(
      "Error reading employees",
      error
    );


    return [];

  }


};







export const saveEmployees = (

employees:StoredEmployee[]

)=>{


localStorage.setItem(

EMPLOYEE_KEY,

JSON.stringify(employees)

);


};







export const addEmployee = (

employee:StoredEmployee

)=>{


const employees =
getEmployees();



const updatedEmployees=[

...employees,

employee

];



saveEmployees(updatedEmployees);



return updatedEmployees;


};








export const updateEmployee = (

updatedEmployee:StoredEmployee

)=>{


const employees =
getEmployees();




const updatedEmployees =

employees.map((employee)=>

employee.id === updatedEmployee.id

?

updatedEmployee

:

employee

);




saveEmployees(updatedEmployees);



return updatedEmployees;


};







export const deleteEmployee = (

id:string

)=>{


const employees =
getEmployees();



const updatedEmployees =

employees.filter(

(employee)=>

employee.id !== id

);




saveEmployees(updatedEmployees);



return updatedEmployees;


};