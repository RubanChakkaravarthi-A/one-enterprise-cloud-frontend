import { useEffect, useState } from "react";

import type { Employee } from "../types/employee";

import {
  getEmployees,
  createEmployee,
  editEmployee,
  removeEmployee,
} from "../services/api/employeeApi";


function useEmployees() {

  const [employees, setEmployees] =
    useState<Employee[]>([]);


  // Load employees

  useEffect(() => {

    const storedEmployees = getEmployees();

    setEmployees(storedEmployees);

  }, []);



  // Add Employee

  const addEmployee = (
    employee: Employee
  ) => {

    const existingEmployees =
      getEmployees();


    const employeeExists =
      existingEmployees.some(
        (existingEmployee) =>
          existingEmployee.id === employee.id
      );


    if (employeeExists) {

      alert("Employee ID already exists.");

      return;

    }


    createEmployee(employee);

    setEmployees(getEmployees());

  };




  // Update Employee

  const updateEmployee = (
    employee: Employee
  ) => {

    editEmployee(employee);

    setEmployees(getEmployees());

  };




  // Delete Employee

  const deleteEmployee = (
    employeeId: string
  ) => {

    removeEmployee(employeeId);

    setEmployees(getEmployees());

  };




  return {

    employees,

    addEmployee,

    updateEmployee,

    deleteEmployee,

  };

}


export default useEmployees;