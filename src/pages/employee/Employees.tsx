import {
  useState,
  type ChangeEvent,
} from "react";

import { useNavigate } from "react-router-dom";

import EmployeeForm from "../../components/employee/EmployeeForm";
import EmployeeTable from "../../components/employee/EmployeeTable";
import EmployeeFilters from "../../components/employee/EmployeeFilters";
import EmployeeCard from "../../components/employee/EmployeeCard";

import type { Employee } from "../../types/employee";

import useEmployees from "../../hooks/useEmployees";


function Employees() {


  const navigate = useNavigate();



  const {
    employees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
  } = useEmployees();




  const [editingEmployee, setEditingEmployee] =
    useState<Employee | null>(null);



  const [searchTerm, setSearchTerm] =
    useState("");



  const [department, setDepartment] =
    useState("");



  const [status, setStatus] =
    useState("");





  const filteredEmployees =
    employees.filter((employee) => {

      const search =
        searchTerm.toLowerCase();



      const matchesSearch =
        employee.id
          .toLowerCase()
          .includes(search) ||

        employee.name
          .toLowerCase()
          .includes(search) ||

        employee.email
          .toLowerCase()
          .includes(search);



      const matchesDepartment =
        department === "" ||
        employee.department === department;



      const matchesStatus =
        status === "" ||
        employee.status === status;



      return (
        matchesSearch &&
        matchesDepartment &&
        matchesStatus
      );

    });






  const handleAddEmployee = (
    employee: Employee
  ) => {

    addEmployee(employee);

  };





  const handleUpdateEmployee = (
    employee: Employee
  ) => {

    updateEmployee(employee);

    setEditingEmployee(null);

  };





  const handleDeleteEmployee = (
    employeeId: string
  ) => {

    deleteEmployee(employeeId);


    if (
      editingEmployee?.id === employeeId
    ) {

      setEditingEmployee(null);

    }

  };





  const handleEditEmployee = (
    employee: Employee
  ) => {

    setEditingEmployee(employee);

  };





  const handleCancelEdit = () => {

    setEditingEmployee(null);

  };





  const handleSearchChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {

    setSearchTerm(
      event.target.value
    );

  };





  const handleDepartmentChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {

    setDepartment(
      event.target.value
    );

  };





  const handleStatusChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {

    setStatus(
      event.target.value
    );

  };





  const handleReset = () => {

    setSearchTerm("");

    setDepartment("");

    setStatus("");

  };





  const handleEmployeeSelect = (
    employee: Employee
  ) => {

    navigate(
      `/dashboard/employee-details/${employee.id}`
    );

  };






  return (

    <section
      className="
        min-h-screen
        py-16
        bg-gradient-to-br
        from-blue-50
        via-white
        to-indigo-100
      "
    >


      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >


        <div
          className="
            text-center
            mb-12
          "
        >

          <h1
            className="
              text-4xl
              font-extrabold
              text-gray-900
              mb-4
            "
          >
            Employee Management
          </h1>


          <p
            className="
              text-gray-600
              text-lg
            "
          >
            Manage employee records using
            add, update and delete operations.
          </p>


        </div>





        <EmployeeForm

          editingEmployee={
            editingEmployee
          }

          onAddEmployee={
            handleAddEmployee
          }

          onUpdateEmployee={
            handleUpdateEmployee
          }

          onCancelEdit={
            handleCancelEdit
          }

        />





        <EmployeeFilters

          searchTerm={
            searchTerm
          }

          department={
            department
          }

          status={
            status
          }

          onSearchChange={
            handleSearchChange
          }

          onDepartmentChange={
            handleDepartmentChange
          }

          onStatusChange={
            handleStatusChange
          }

          onReset={
            handleReset
          }

        />





        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            mb-10
          "
        >

          {
            filteredEmployees.map(
              (employee) => (

                <EmployeeCard

                  key={
                    employee.id
                  }

                  employee={
                    employee
                  }

                  onSelect={
                    handleEmployeeSelect
                  }

                />

              )
            )
          }


        </div>





        <EmployeeTable

          employees={
            filteredEmployees
          }

          onEdit={
            handleEditEmployee
          }

          onDelete={
            handleDeleteEmployee
          }

        />


      </div>


    </section>

  );

}


export default Employees;